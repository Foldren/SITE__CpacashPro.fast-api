from fastapi import APIRouter, Request

router = APIRouter()

@router.post("/api/registration/signup")
async def signup(request: Request):
    return await request.form()