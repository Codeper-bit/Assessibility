from fastapi import UploadFile


def run_transform(file: UploadFile, text: str | None) -> str:
    """
    This function has no idea it's connected to a website. It takes
    plain Python inputs and returns a plain Python output — that's
    what makes it reusable and easy to test on its own.

    Day 2 placeholder: just confirms what was received.
    Day 3+: this is where PDF text extraction and the LLM call go.
    """
    if file:
        return f"Received file: {file.filename}"
    if text:
        return f"Received text ({len(text)} chars)"
    return "No input provided"
