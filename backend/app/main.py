from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .schemas import (
    ProductivityDimensionResponse,
    ProductivityFrameworkResponse,
    ProductivityMetricResponse,
    AICapabilityResponse,
    AIEvidenceResponse,
    AIStageResponse,
)

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


@app.get("/api/productivity/metrics", response_model=list[ProductivityMetricResponse])
def productivity_metrics() -> list[ProductivityMetricResponse]:
    return []


@app.get("/api/productivity/dimensions", response_model=list[ProductivityDimensionResponse])
def productivity_dimensions() -> list[ProductivityDimensionResponse]:
    return []


@app.get("/api/productivity/frameworks", response_model=list[ProductivityFrameworkResponse])
def productivity_frameworks() -> list[ProductivityFrameworkResponse]:
    return []


@app.get("/api/productivity/frameworks/{framework_id}", response_model=ProductivityFrameworkResponse)
def productivity_framework(framework_id: str) -> ProductivityFrameworkResponse:
    return ProductivityFrameworkResponse(
        id=framework_id,
        name="TODO: VERIFY SOURCE",
        description="Research content is not loaded from the database yet.",
        measurement_context="TODO: VERIFY SOURCE",
        limitations="TODO: VERIFY SOURCE",
        status="needs-verification",
        dimensions=[],
        source_ids=[],
    )


@app.get("/api/ai/stages", response_model=list[AIStageResponse])
def ai_stages() -> list[AIStageResponse]:
    return []


@app.get("/api/ai/capabilities", response_model=list[AICapabilityResponse])
def ai_capabilities() -> list[AICapabilityResponse]:
    return []


@app.get("/api/ai/evidence", response_model=list[AIEvidenceResponse])
def ai_evidence() -> list[AIEvidenceResponse]:
    return []


@app.get("/api/ai/workflows")
def ai_workflows() -> dict[str, list[str]]:
    return {"steps": []}
