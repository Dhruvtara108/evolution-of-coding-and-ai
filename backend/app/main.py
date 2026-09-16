from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Evolution of Coding & AI API", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/timeline")
def timeline() -> dict[str, list[dict[str, str]]]:
    return {"items": []}


@app.get("/api/frameworks")
def frameworks() -> dict[str, list[dict[str, str]]]:
    return {"items": []}
