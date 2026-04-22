from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="EquiGuard API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ResumeInput(BaseModel):
    resume_text: str

@app.get("/")
def root():
    return {"status": "EquiGuard API is running"}

@app.post("/evaluate")
def evaluate(input: ResumeInput):
    return {
        "original_score": 85,
        "shadow_score": 72,
        "bias_detected": True,
        "bias_gap": 13,
        "verdict": "BIAS DETECTED"
    }

@app.get("/logs")
def get_logs():
    return {"logs": []}