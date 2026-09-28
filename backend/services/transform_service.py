import io
import json

from fastapi import UploadFile
from groq import Groq
from pypdf import PdfReader
from pypdf.errors import PdfReadError

from core.config import settings
from schemas.transform import Card

client = Groq(api_key=settings.groq_api_key)

SYSTEM_PROMPT = """You turn dense learning material into concept cards.
Return ONLY a JSON object in exactly this shape:
{"cards": [{"title": "...", "explanation": "...", "example": "..."}]}

Rules:
- One idea per card, 4 to 8 cards.
- Title: 2 to 5 words.
- Explanation: 1 to 2 short, plain sentences.
- Example: one short concrete example, or null if none fits.
- No markdown, no extra text."""


def extract_text_from_pdf(file: UploadFile) -> str:
    contents = file.file.read()
    try:
        reader = PdfReader(io.BytesIO(contents))
    except PdfReadError:
        raise ValueError(
            f"'{file.filename}' isn't a valid PDF. Please upload a real PDF."
        )

    text = "".join(page.extract_text() or "" for page in reader.pages).strip()
    if not text:
        raise ValueError(
            f"No readable text in '{file.filename}'. It may be a scanned PDF."
        )
    return text


def generate_cards(source_text: str) -> list[Card]:
    response = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        response_format={"type": "json_object"},
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": source_text[:4000]},
        ],
    )

    raw = response.choices[0].message.content
    try:
        data = json.loads(raw)
        return [Card(**c) for c in data["cards"]]
    except (json.JSONDecodeError, KeyError, TypeError, ValueError):
        raise ValueError(
            "The AI returned an unexpected format. Please try again.")


def run_transform(file: UploadFile | None, text: str | None) -> list[Card]:
    if file:
        return generate_cards(extract_text_from_pdf(file))
    if text and text.strip():
        return generate_cards(text)
    raise ValueError("No input provided.")
