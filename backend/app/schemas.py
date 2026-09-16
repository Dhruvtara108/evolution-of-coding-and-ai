from typing import Literal

from pydantic import BaseModel


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
