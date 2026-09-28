from pydantic import BaseModel


class Card(BaseModel):
    title: str
    explanation: str
    example: str | None = None


class TransformResponse(BaseModel):
    status: str    # "ok" or "error"
    cards: list[Card] = []
    message: str | None = None   # human-readable result or error message
