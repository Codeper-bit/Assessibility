from pydantic import BaseModel


class TransformResponse(BaseModel):
    status: str    # "ok" or "error"
    message: str   # human-readable result or error message
