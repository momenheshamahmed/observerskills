---
name: product-discovery-strategy
description: >
  Full-stack product discovery and strategy skill for Observer Studio. Use this skill whenever the user mentions a new product, client project, app idea, platform, feature set, or business initiative that needs structured thinking. Covers the full pre-design journey: discovery briefs & problem framing, user research plans & interview guides, product strategy documents, and competitive/market analysis. Always applies Middle East / Arabic market context, AI-native product thinking, business model considerations, and technical feasibility. Triggers on phrases like "let's kick off a discovery", "I need to scope this project", "help me think through this product", "write a strategy doc", "research plan for X", "competitive landscape for X", or whenever a client project is being structured from scratch or re-framed.
---

# Product Discovery & Strategy

A skill for Observer Studio to run structured product discovery and produce client-ready or internal strategy artifacts.

---

## Guiding Principles

Every output from this skill should reflect four lenses:

1. **Middle East / Arabic market context** — regulatory environment, cultural norms, Arabic RTL considerations, regional payment/logistics infrastructure, local competitor dynamics, and trust patterns specific to MENA users.
2. **AI-native product thinking** — where and how AI can be a core capability (not a feature sprinkle), and how it shifts the product's moat, UX, and operations.
3. **Business model & monetization** — always connect product decisions to revenue logic. Who pays, why, when, and how much?
4. **Technical feasibility** — flag dependencies, integration complexity, or risky assumptions that could break delivery.

---

## Starting Protocol

**Always begin by running the Discovery Interview** (below) before producing any artifact. Read the user's message first — if they've already dumped substantial context, skip questions that are clearly answered and only ask the remaining ones.

---

## Discovery Interview

Ask these questions conversationally, grouped into a single message. Adapt language to whether this is a client project or an internal/exploratory one.

### Core Questions

```
1. What is the product or initiative? (1–2 sentence elevator pitch)
2. Who commissioned this — is it a client, or Observer Studio's own initiative?
3. What problem are we solving, and for whom specifically?
4. What's the market or industry context? (region, sector, competitive space)
5. What stage is this at? (pure idea / early validation / redesign / scaling)
6. What do we already know? (research, data, assumptions, prior work)
7. What decisions does this discovery need to unlock?
8. What's the timeline and what artifact do they need first?
```

---

## Artifact Templates

Once the interview is complete, produce the requested artifact. Choose format based on context:
- **Internal** → Structured Markdown
- **Client-facing** → DOCX or Presentation-style sections (use DOCX skill if available)
- **Notion handoff** → Notion-ready Markdown with clear heading hierarchy

---

### 1. Discovery Brief & Problem Framing

Structure:

```
# Discovery Brief: [Product Name]
**Date** | **Client/Studio** | **Stage**

## Problem Statement
One crisp paragraph. What's broken, for whom, and why does it matter now?

## Context & Background
Market landscape, regional dynamics, prior attempts. Flag MENA-specific factors.

## Target Users
Primary and secondary. Include behavioral and cultural context relevant to the region.

## Key Assumptions
List the 3–5 riskiest assumptions that must be validated.

## Success Criteria
How will we know discovery was successful? What decisions will it enable?

## Open Questions
Unresolved questions that research or strategy work must address.

## AI Opportunity Scan
Where could AI meaningfully change this product's capability, experience, or economics?
```

---

### 2. User Research Plan & Interview Guide

Structure:

```
# Research Plan: [Product Name]
**Objective** | **Methods** | **Timeline**

## Research Goals
What we need to learn, mapped to the open questions from the discovery brief.

## Methodology
Recommended methods (generative interviews, usability testing, diary study, etc.)
with rationale. Flag if remote vs. in-person matters for MENA context.

## Participant Criteria
Screener criteria, sample size, recruitment channels. Note any Arabic language
or regional access considerations.

## Discussion Guide
### Warm-up (5 min)
### Core Topics (30–40 min)
  - Topic 1: [question set]
  - Topic 2: [question set]
  - Topic 3: [question set]
### Concept Probe (10 min, if applicable)
### Wrap-up (5 min)

## Analysis Framework
How findings will be synthesized (affinity mapping, jobs-to-be-done, etc.)

## Deliverables & Timeline
```

---

### 3. Product Strategy Document

Structure:

```
# Product Strategy: [Product Name]
**Version** | **Date** | **Owner**

## Vision
One sentence. What world does this product create?

## Problem & Opportunity
Quantified where possible. Include market size signals for MENA if relevant.

## Target Market
Segment definition. Primary vs. secondary. Regional specifics.

## Value Proposition
What we offer each segment that alternatives don't.

## Business Model
Revenue model, pricing logic, unit economics assumptions, monetization timeline.

## AI Strategy
Core AI capabilities, data strategy, competitive moat, build/buy/partner decision.

## Product Principles
3–5 guiding principles for product decisions.

## Roadmap Horizons
H1 (0–3 mo): Foundation
H2 (3–9 mo): Growth
H3 (9–18 mo): Scale

## Risks & Mitigations
Technical, market, regulatory, and execution risks.

## Open Decisions
What still needs to be resolved and by when.
```

---

### 4. Competitive & Market Analysis

Structure:

```
# Competitive Analysis: [Product Name / Space]
**Date** | **Scope**

## Market Overview
Size, growth, key dynamics. MENA-specific data where available.

## Competitor Landscape
| Competitor | Target User | Core Value Prop | Business Model | MENA Presence | AI Capability | Key Weakness |
|---|---|---|---|---|---|---|

## Competitive Positioning Map
Describe 2 key axes and where each player sits (produce as a written narrative
or suggest a 2x2 if the user wants a visual).

## Whitespace Opportunities
Where is the market underserved? What gaps exist in the MENA context specifically?

## Positioning Recommendation
Where should this product stand relative to the field, and why?

## Sources & Confidence
Flag what's based on public data vs. assumptions.
```

---

## Output Format Instructions

| Context | Format |
|---|---|
| Internal workshop / working doc | Structured Markdown |
| Client presentation | Presentation-style sections with narrative headers |
| Client deliverable document | DOCX (invoke docx skill) |
| Notion workspace handoff | Clean Markdown with H1/H2/H3 hierarchy, no HTML |

When producing DOCX output, read `/mnt/skills/public/docx/SKILL.md` first.

---

## Quality Checklist

Before finalizing any artifact, verify:
- [ ] MENA/Arabic market factors addressed where relevant
- [ ] AI opportunity explicitly considered
- [ ] Business model and monetization logic present
- [ ] At least one technical feasibility flag if the product involves build
- [ ] Language and tone calibrated for audience (internal vs. client)
- [ ] No generic filler — every section earns its place
