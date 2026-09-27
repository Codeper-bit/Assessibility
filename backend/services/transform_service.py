from fastapi import UploadFile
from pypdf import PdfReader
import io


def run_transform(file: UploadFile, text: str | None) -> str:

    if file:
        contents = file.file.read()
        reader = PdfReader(io.BytesIO(contents))
        extracted = ""
        for page in reader.pages:
            extracted += page.extract_text() or ""

        return f"Extracted  {len(extracted)} character"
    if text:
        return f"Received text ({len(text)} chars)"
    return "No input provided"
