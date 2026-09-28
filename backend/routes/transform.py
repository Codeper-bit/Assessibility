from fastapi import APIRouter, UploadFile, File, Form
from schemas.transform import TransformResponse
from services.transform_service import run_transform
import traceback
router = APIRouter()


@router.post("/transform", response_model=TransformResponse)
async def transform(
    file: UploadFile | None = File(None),
    text: str | None = Form(None),
):
    try:
        cards = run_transform(file=file, text=text)
        return TransformResponse(status="ok", cards=cards)
    except ValueError as e:
        # Expected problems: bad PDF, empty input, malformed AI output
        return TransformResponse(status="error", message=str(e))
    except Exception:
        traceback.print_exc()
        return TransformResponse(
            status="error", message="Something went wrong. Please try again."
        )
