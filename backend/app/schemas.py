from typing import Literal

from pydantic import BaseModel, HttpUrl


ResearchStatus = Literal["verified", "needs-verification", "synthesis"]


class ProductivityMetricResponse(BaseModel):
    id: str
    name: str
    category: Literal["activity", "output", "outcome"]
    description: str
    what_it_measures: str
    what_it_cannot_tell_us: str
    limitations: str
    source_ids: list[str]


class ProductivityDimensionResponse(BaseModel):
    id: str
    name: str
    short_label: str
    description: str
    examples: list[str]
    measurement_considerations: str
    limitations: str
    source_ids: list[str]


class ProductivityFrameworkResponse(BaseModel):
    id: str
    name: str
    description: str
    measurement_context: str
    limitations: str
    status: ResearchStatus
    dimensions: list[ProductivityDimensionResponse]
    source_ids: list[str]


class AIStageResponse(BaseModel):
    id: str
    title: str
    description: str
    human_work: str
    ai_work: str
    uncertainty: str
    verification: str
    capability_level: Literal["limited", "moderate", "expanded", "context-dependent"]
    status: ResearchStatus


class AICapabilityResponse(BaseModel):
    id: str
    name: str
    description: str
    state: Literal["limited", "moderate", "expanded", "context-dependent"]
    caveat: str


class AIEvidenceResponse(BaseModel):
    id: str
    title: str
    source_id: str
    claim: str
    context: str
    study_type: str
    population: str
    task: str
    finding: str
    limitations: str
    verification_status: ResearchStatus


class ResearchSourceResponse(BaseModel):
    id: str
    title: str
    authors: list[str]
    year: int | None = None
    type: str
    category: str
    venue: str | None = None
    url: HttpUrl | None = None
    doi: str | None = None
    publisher: str | None = None
    verified: bool = False
    verification_notes: str | None = None


class ResearchClaimResponse(BaseModel):
    id: str
    statement: str
    source_id: str
    evidence_type: str
    category: str
    context: str
    population: str | None = None
    task: str | None = None
    finding: str
    limitations: str
    verification_status: ResearchStatus
    last_verified: str | None = None
