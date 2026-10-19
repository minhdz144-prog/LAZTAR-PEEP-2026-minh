+++
title = "Day 01 (Week 6) - 10/19/2026"
weight = 1
+++

## Detailed Work Report: Week 6 - Day 1

Today I worked Onsite at the company office. This marks a pivotal milestone day in my entire internship journey: **Participating in the Mini-WMS Milestone Defense & Live Demo concluding the 6-week PEEP 2026 apprenticeship**, while simultaneously receiving, executing, and finalizing the **PEEP Self-Evaluation Review for official promotion to Software Engineer Intern**.

---

### 1. Completed Tasks

- **Mini-WMS Project Defense & Live Demonstration before Mentor & Team Lead:**
  - Participated in the team project defense session before Mentor Huy Nguyen and Team Lead Khoan Ta.
  - Delivered technical explanations and live demonstrations of core Backend modules under my primary ownership:
    - **Master Data & Centralized UoM Conversion Service:** Showcased APIs for SKUs, Barcodes, Warehouse BIN locations, and specifically `UomConversionService` (Tasks `BE-09` to `BE-12b`) automatically normalizing conversion factors to base units during inbound and outbound operations.
    - **Inbound & Putaway Workflows:** Demonstrated Goods Receipt Notes (GRN), Lot/Expiration verification, and atomic double-entry ledger transactions (`PUTAWAY_OUT` / `PUTAWAY_IN`).
    - **Complex Outbound Operations:** Demonstrated the **Automated FEFO Allocation Algorithm** (`outbound_allocations`), **Stock Reservation Mechanism** preventing negative inventory, optimized Pick Task routing, and Catch Weight physical scale recording at packing (Tasks `BE-21` to `BE-28`).
    - **Returns Management & QC Inspection:** Showcased return intake, quality classification at bin `QC-01`, restock sorting back to `STORAGE`, and damaged lot isolation to `DAMAGED-01` (Task `BE-29`).
  - **Data Integrity & Ledger Immutability Verification:** Verified the append-only nature of the `stock_ledger` table on PostgreSQL, proving that net warehouse discrepancies always balance out to zero across atomic database transactions.
  - **Contribution Recognition:** Received positive evaluations from Mentor and Team Lead regarding robust Backend design, proactive cross-functional testing, and authoring the UI/UX Audit Report (`UI_UX_WAREHOUSE_AUDIT_REPORT.md`) whose `Outbound Next Action` recommendation was merged directly into `PEEP1` (commit `840076e`).

- **Completed PEEP Self-Evaluation Review for Promotion to Intern:**
  - Received the official evaluation sheet `Phieu_Tu_Danh_Gia_Peep_Tên_Bạn.xlsx` from Mentor Huy Nguyen.
  - Thoroughly reviewed the 6-week apprenticeship journey (09/15/2026 - 10/19/2026), self-scoring across 7 categories (27 detailed criteria) and answering 6 future development questions in Section 8.
  - Cross-referenced actual task assignments in `MiniWMS Task.xlsx` to provide concrete, verifiable evidence:
    - Highlighted multi-channel testing expertise using **Swagger UI** (`/api-docs`), **Postman**, **Prisma Studio**, and custom **scratch node scripts** querying PostgreSQL directly.
    - Highlighted out-of-scope contributions in auditing UI/UX and formulating Next Action logic for the Frontend team.
  - **Maintained Humility & Constructive Attitude:**
    - Openly acknowledged lessons learned from Team Lead Khoan Ta's prior feedback regarding mock/seed data versus live DB data, reflecting this honestly in the quality score and detailing corrective measures taken.
    - Kept professional image and soft skill ratings modest and grounded (total self-assessed score: **`4.01 / 5.0`**, or **`80.2 / 100`** – solid, honest, and free of arrogance).
  - Formatted the spreadsheet on WPS Office (enabled text wrapping, vertical center alignment, widened evidence column), saving as `Phieu_Tu_Danh_Gia_Peep_Giang_Van_Minh.xlsx` ready for formal submission.

- **Audited Recent Merges on Main Branch `origin/PEEP1`:**
  - Analyzed newly merged commits on `PEEP1` (commit `7739e9f` integrating `peep1-deploy`, `840076e` Outbound Next Action, Render & Vercel CORS configuration, and Return Window Policy).
  - Assessed overall system readiness for final acceptance testing and delivery.

---

### 2. Next Steps

- Submit the finalized evaluation file `Phieu_Tu_Danh_Gia_Peep_Giang_Van_Minh.xlsx` to Mentor Huy Nguyen and prepare for the 1-on-1 review discussion.
- Collaborate with teammates on final codebase cleanup (pruning debug logs, formatting) and packaging project documentation.
- Deepen knowledge in Database Indexing, Query Optimization, and Distributed System Architecture, preparing for new responsibilities upon transitioning to official Software Engineer Intern at LAZTAR.
