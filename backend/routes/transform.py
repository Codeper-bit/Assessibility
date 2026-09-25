from fastapi import APIRouter, UploadFile, File, Form
from schemas.transform import TransformResponse
from services.transform_service import run_transform

router = APIRouter()


@router.post("/transform", response_model=TransformResponse)
async def transform(
    file: UploadFile | None = File(None),
    text: str | None = Form(None),
):
    try:
        result = run_transform(file=file, text=text)
        return TransformResponse(status="ok", message=result)
    except Exception as e:
        return TransformResponse(status="error", message=str(e))
