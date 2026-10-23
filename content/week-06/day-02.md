+++
title = "Day 02 (Week 6) - 10/20/2026"
weight = 2
+++

## Detailed Work Report: Week 6 - Day 2

Today I worked Remote. The primary focus of the day was refining technical evidence and finalizing the self-evaluation review sheet (`Phieu_Tu_Danh_Gia_Peep_GiangVanMinh.xlsx`), conducting in-depth research into advanced Git Flow pull request mechanics, and analyzing post-demo architectural optimizations.

---

### 1. Completed Tasks

- **Technical Evidence Refinement in PEEP Self-Evaluation Sheet:**
  - Cross-referenced self-assessment scores against actual codebase deliverables and post-demo review feedback:
    - **Independent Testing Tooling:** Validated evidence regarding multi-channel testing using **Swagger UI** (`/api-docs`), **Postman**, **Prisma Studio**, and custom **scratch node scripts** querying PostgreSQL directly to verify transaction integrity.
    - **Shared Services Architecture:** Standardized technical citations for the design of `UomConversionService` (centralizing agricultural unit conversion factors) and the BigInt JSON polyfill in `main.ts`.
    - **Humility & Growth Mindset:** Calibrated scoring on quality and professional image criteria (solid 3 - 4 ratings), candidly acknowledging lessons learned from Team Lead Khoan Ta's audit on mock/seed data versus live DB data, and documenting concrete verification solutions applied.
  - Finalized Section 8 responses, detailing 3-month goals upon transitioning to Software Engineer Intern: expanding System Design skills, achieving > 80% test coverage, and mastering advanced database query optimizations.

- **Advanced Git Flow & Pull Request Mechanics Research:**
  - Explored enterprise GitHub collaboration workflows:
    - **"Allow edits by maintainers" Feature:** Clarified how Tech Leads/Maintainers can check out contributor PR branches locally, apply patches or merge base updates to resolve conflicts, and push directly back to the active PR.
    - Distinguished between pulling base updates into a feature branch (`Merge branch 'PEEP1' into feature/...`) versus the final squash/merge into the main branch (`merged commit into PEEP1`).
    - Solidified conflict resolution workflows that preserve individual commit history and attribution.

- **Post-Demo Technical Review & Contribution Cataloging:**
  - Reviewed technical inquiries raised by mentors during the 10/19 demo, focusing on:
    - Double-entry ledger constraints on append-only `stock_ledger`.
    - Race condition prevention during high-concurrency stock reservations.
    - Return quality grading flows isolating goods between `STORAGE` (Restock) and `DAMAGED-01` (Scrap).
  - Consolidated a complete inventory of authored Backend tasks and cross-functional contributions (UI/UX audit report, Outbound Next Action logic) ready for tomorrow's Onsite alignment.

---

### 2. Next Steps

- Work Onsite at the company office tomorrow (Wednesday, 10/21/2026).
- Review and align project task allocation and technical contribution metrics with Team Lead Khoan Ta and teammates.
- Submit the finalized PEEP Self-Evaluation Sheet to Mentor Huy Nguyen.
