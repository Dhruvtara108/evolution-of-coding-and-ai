import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parents[1]))

from app.main import productivity_framework  # noqa: E402
from app.schemas import ProductivityMetricResponse  # noqa: E402


class ProductivityApiTests(unittest.TestCase):
    def test_metric_schema_requires_structured_context(self) -> None:
        metric = ProductivityMetricResponse(
            id="commits",
            name="Commits",
            category="activity",
            description="Version-control activity.",
            what_it_measures="Change boundaries.",
            what_it_cannot_tell_us="Value or quality.",
            limitations="Context required.",
            source_ids=[],
        )
        self.assertEqual(metric.category, "activity")

    def test_framework_endpoint_preserves_verification_status(self) -> None:
        framework = productivity_framework("dora")
        self.assertEqual(framework.status, "needs-verification")
        self.assertEqual(framework.id, "dora")


if __name__ == "__main__":
    unittest.main()
