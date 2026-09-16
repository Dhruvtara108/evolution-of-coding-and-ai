# Research methodology

## Purpose

This project is an interactive educational artifact. Its research layer is designed to make claims traceable, contextual, and explicit about uncertainty rather than to produce a single authoritative history of software development.

## Source selection

Sources are prioritized in this order:

1. Peer-reviewed papers
2. Original research papers and preprints where appropriate
3. Official framework documentation
4. Original research institutions
5. Official engineering research
6. Reputable technical reports
7. Vendor documentation for product-specific claims

Secondary summaries are used for discovery only. A claim is not treated as verified until the primary or authoritative source has been checked.

## Evidence classification

Each claim is assigned an evidence type such as `controlled-experiment`, `observational-study`, `survey`, `case-study`, `benchmark`, `industry-report`, `vendor-report`, `literature-review`, or `other`.

Evidence type describes how information was produced. It does not rank scientific certainty.

## Claim extraction

Research claims record:

- The statement shown or supported
- The source ID
- Category
- Context
- Population and task where relevant
- Reported finding
- Limitations
- Verification status
- Last verification date

UI copy should consume structured data rather than embedding research claims directly in components.

## Verification states

- `verified`: source metadata and the represented claim have been checked against the cited source.
- `partially-verified`: source and high-level claim are identified, but full-paper or claim-boundary review remains.
- `unverified` / `needs-verification`: the material is retained for research planning but must not be presented as established evidence.
- `synthesis`: project interpretation or conceptual framing, not a direct source finding.

These states describe traceability and review status, not the truth value or strength of a scientific result.

## Limitations and context

One experiment, framework, or vendor report must not be generalized beyond its population, task, environment, and method. Quantitative claims remain attached to their context and are not converted into universal productivity conclusions.

## Vendor claims

Vendor documentation may establish what a product says it supports. It does not, by itself, establish independent productivity, quality, or safety outcomes. Vendor reports are labeled separately from controlled experiments and independent research.

## Uncertain evidence

When a source cannot be verified, the project keeps `TODO: VERIFY SOURCE` or an equivalent verification state. Missing metadata is represented as empty or nullable fields rather than invented.

## Update process

1. Identify a claim in the UI or data.
2. Link it to a source record.
3. Check the primary or authoritative source.
4. Record method, context, finding, and limitations.
5. Assign a verification state and date.
6. Run data tests, lint, typecheck, backend tests, and production build.
7. Review the rendered citation and source link.

