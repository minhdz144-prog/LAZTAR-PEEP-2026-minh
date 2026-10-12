+++
title = "Day 01 (Week 5) - 10/12/2026"
weight = 1
+++

## Detailed Work Report: Week 5 - Day 1

Today I worked Remote. The primary focus of the day was conducting an End-to-End Live Walkthrough of the full warehouse operational flow based on Team Lead Khoan Ta's Golden Scenario (`MINI-WMS-DEMO-SAMPLE-DATA.docx`, `MINI-WMS-UI-DEMO-GUIDE.docx`) to prepare for the milestone project defense ahead of Tuesday 12:00 PM deadline. In parallel, I identified and resolved critical system blockers and finalized the comprehensive UI/UX Audit Report for the Frontend team.

### 1. Completed Tasks

- **Isolated Test Environment Setup & Demo Seed Data Initialization:**
  - Spun up local Docker PostgreSQL database (`mini-wms-db` on port 5432) to ensure a safe, reproducible testing sandbox.
  - Preserved shared Cloud Neon DB connection strings in `.env` for the rest of the team.
  - Synchronized Prisma schemas (`npx prisma db push`) and populated standard demo seed datasets (`npm run seed:demo`).
  - Ran both NestJS Backend (port 3069) and Next.js Frontend (port 3000) servers concurrently.

- **Resolved Critical Frontend Permission Mapping Blocker (`warehouse_fe/constants/auth.ts`):**
  - **Issue:** When logging in with designated seed demo accounts (`demo.picker`, `demo.packer`, `demo.qc`, `demo.manager`), the UI fell back to treating them as `VIEWER` ("View-Only Account"), completely disabling pick, pack, and approval capabilities.
  - **Root Cause:** The `ROLE_MAP` constant in `warehouse_fe/constants/auth.ts` only mapped un-prefixed roles (`PICKER`, `PACKER`...) while omitting `DEMO_` prefixes from seed data (`DEMO_PICKER`, `DEMO_PACKER`...).
  - **Fix:** Added complete `DEMO_*` role definitions to `ROLE_MAP`, successfully restoring full operational permissions for each persona.

- **Enforced Location Lock Integrity & Maker-Checker Compliance:**
  - **Location Collision Lock:** Resolved picking lock on bin `A01` by completing remaining 12 kg pick tasks on existing seed order `DEMO-20261012-SO-PICKING`.
  - **Maker-Checker Anti-Fraud Guard:** Complied with strict segregation of duties where pickers cannot self-approve their own operation assignments; switched to Manager account (`demo.manager@mini-wms.test`) to independently approve the pick assignment.

- **Executed 3 Core Operational Workflows (Golden Scenario):**
  - **Flow 1 (Inbound Receiving & Putaway):**
    - Confirmed goods receipt `GRN-20261012-E2A60819` for 100 kg Dalat Tomato (`DEMO-TOMATO`) at staging location `RECV-01`.
    - Created and completed putaway document `PA-DEMO-01`, moving 100 kg from `RECV-01` into `STORAGE` bins.
  - **Flow 2 (Sales Order, Picking, Catch Weight, Packing & Shipping):**
    - Placed sales order `SO-DEMO-01` for 40 kg `DEMO-TOMATO`.
    - Allocated stock via FEFO algorithm and generated pick task.
    - Logged into `demo.picker` and moved picked 40 kg to staging area `STAGING-01`.
    - Recorded actual agricultural catch-weight (40 kg) accurately.
    - Logged into `demo.packer`, created package `PK-DEMO-01`, confirmed packaging, and dispatched order to `SHIPPED` status.
    - Verified total warehouse stock accurately decreased from 100 kg to 60 kg.
  - **Flow 3 (Customer Returns Receiving):**
    - Received 5 kg `DEMO-TOMATO` returned from order `SO-DEMO-01` into inspection bin `QC-01`.

- **Authored & Updated Comprehensive UI/UX Audit Report (`UI_UX_WAREHOUSE_AUDIT_REPORT.md`):**
  - Synthesized 7 major user friction points and blockers discovered during live testing:
    1. Missing `DEMO_*` roles in auth constants.
    2. Non-clickable progress stepper (`OutboundProgressStepper`) creating frozen-UI impression.
    3. Catch-weight warning disconnected from input form (form hidden at bottom of allocation tab).
    4. Missing destination bin auto-selection and guidance during returns creation.
    5. Location lock warnings lacking clear user-friendly operational context.
    6. Maker-Checker approval blockage missing explanatory security notice.
    7. Copy-paste placeholder mismatch (*"Search putaway document..."* in picking search bar).
  - Pinpointed exact Frontend files and code line references.
  - Provided copy-pasteable Quick Win code snippets.
  - Formulated prioritized P0, P1, and P2 action matrix for the Frontend team ahead of Tuesday's demo.

### 2. Next Steps

- Assist Frontend team in applying P0 quick fixes from the audit report.
- Execute remaining Golden Scenario steps: QC Inspection (3 kg Restock, 2 kg Damaged) $\rightarrow$ Physical Scrap (1 kg) $\rightarrow$ Cycle Count Variance (-2 kg) $\rightarrow$ Internal Transfer (5 kg) $\rightarrow$ Stock Ledger Audit verifying final 62 kg balance.
- Conduct dry run of defense presentation.
