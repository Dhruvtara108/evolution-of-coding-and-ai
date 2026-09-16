import unittest

from pydantic import ValidationError

from app.schemas import ResearchSourceResponse


class ResearchSchemaTests(unittest.TestCase):
    def test_source_schema_accepts_verified_http_url(self) -> None:
        source = ResearchSourceResponse(
            id="source",
            title="Verified source",
            authors=["Author"],
            type="paper",
            category="methodology",
            url="https://example.com/source",
            verified=True,
        )
        self.assertTrue(source.verified)

    def test_source_schema_rejects_malformed_url(self) -> None:
        with self.assertRaises(ValidationError):
            ResearchSourceResponse(
                id="source",
                title="Malformed source",
                authors=[],
                type="paper",
                category="methodology",
                url="not-a-url",
            )
