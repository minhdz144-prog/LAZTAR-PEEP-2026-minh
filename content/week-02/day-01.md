+++
title = "Day 01 (Week 2) - 09/21/2026"
weight = 1
+++

## Detailed Work Report: Week 2 - Day 1

Today I worked On-Site at the office. The main focus of the day was onboarding onto the new **Mini-WMS (FreshLink Produce)** project, studying the overview documentation of the agricultural warehouse management system, and familiarizing myself with core business rules.

### 1. Completed Tasks

- **Studied Mini-WMS Project Overview Documentation:**
  - Understood the project background: Simulating a real-world produce warehouse management system for the hypothetical client "FreshLink Produce", building practical domain knowledge and a production-grade portfolio piece.
  - Grasped the End-to-End warehouse operational flow: **RECEIVING → PUTAWAY → ALLOCATION → PICKING → PACKING → SHIPPING → (RETURNS)**.
  - Alignment on Tech Stack:
    - **Backend:** NestJS (TypeScript).
    - **Database:** PostgreSQL 16 with Prisma ORM.
    - **Frontend:** React + TypeScript on Next.js (Mobile-first operational UI).
    - **Infrastructure:** Docker Compose + GitHub Actions CI.

- **Researched 8 Core Warehouse Business Rules:**
  - **Available Stock ≠ Physical Stock:** Clear distinction between `qty_on_hand` (physical stock on shelves) and `qty_available` (physical stock minus reserved quantity `qty_reserved`).
  - **Unit of Measure (UoM) Conversion:** All stored inventory quantities must convert to Base UoM (e.g., kg) to prevent discrepancies.
  - **FEFO Dispatch (First Expired, First Out):** Fresh produce dispatching prioritizes lots closest to expiration date, rather than standard FIFO.
  - **Catch Weight Management:** Supporting variance between ordered quantity and actual weighed weight upon fulfillment.
  - **Inventory Adjustment & Approval:** Warehouse staff cannot directly alter inventory numbers; adjustments require multi-level approval workflows.
  - **Concurrency Control:** Ensuring prevention of negative inventory when multiple users attempt simultaneous reservation or picking.

- **Mastered Technical "Life-or-Death" Rules:**
  - Single Entry Point: All inventory state modifications must strictly pass through a single service (`InventoryLedgerService`). Direct DB UPDATE statements on inventory tables from other modules are prohibited.
  - Stock Ledger Immutability: The transaction ledger table (`stock_ledger`) is strictly Append-Only (INSERT only, no UPDATE/DELETE). Adjustments require REVERSAL entries.

### 2. Next Steps

- Read the **Sprint 0** execution plan document (Business & Database Design for WMS).
- Convene with the 5-trainee team to divide roles and claim specific domain responsibilities.
