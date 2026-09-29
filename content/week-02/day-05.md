+++
title = "Day 05 (Week 2) - 09/25/2026"
weight = 5
+++

## Detailed Work Report: Week 2 - Day 5

Today I worked Remotely. This marked Day 3 of **Sprint 0: Business & Database Design for WMS**. Key activities included participating in the 60-minute system integration meeting, cross-reviewing domain touchpoints, and executing paper-based dry run testing (Paper UAT) across 8 business scenarios.

### 1. Completed Tasks

- **System Integration & Cross-Domain Review (Sprint 0 Plan Checklist §6):**
  - **B ↔ D (Warehouse Structure ↔ Inventory Model):**
    - Enforced the rule that `inventory.location_id` must exclusively point to records with `location_type = 'BIN'`.
    - Defined business rules: Stock located in BINs with `purpose = 'DAMAGED'` or `'QC'` is excluded from calculated sellable inventory (`qty_available`).
  - **C ↔ D (Product & Supplier ↔ Inventory Model):**
    - Standardized all physical inventory quantities in the `inventory` table to be stored in the SKU's **Base UoM**.
    - Evaluated `is_lot_tracked` from `skus`: When `true`, an `inventory` record strictly requires a valid `lot_id` referencing the `lots` table.
  - **D ↔ E (Inventory Model ↔ Stock Ledger & Movement):**
    - Synchronized composite natural key references: `(location_id, sku_id, lot_id)`.
    - Enforced database transaction atomicity: Any operation modifying physical stock (`qty_on_hand`) must update `inventory` and append an entry to `stock_ledger` within the **same DB transaction**.
    - Clarified reservation mechanics: Reservation (`reserve`/`release`) strictly updates `inventory_reservations` and `inventory.qty_reserved`, without writing entries into `stock_ledger`.

- **Executed 8 Paper-Based UAT Scenarios (Sprint 0 Plan §7):**
  - **Scenario 1 (Receiving 10 BOX SKU-001):** Converted 10 BOX (1 BOX = 12 EA) = +120 EA. `stock_ledger` appends +120 RECEIPT line; `inventory` updates `qty_on_hand = 120`.
  - **Scenario 3 (Outbound order reserving 30 EA):** `inventory` sets `qty_reserved = 30`, `qty_available = 90`. `qty_on_hand` remains 120; no ledger line created.
  - **Scenario 4 (Pick 30 EA and Ship):** `inventory` updates `qty_on_hand = 90`, `qty_reserved = 0`. `stock_ledger` records a -30 PICK/SHIP line.
  - **Scenario 8 (Concurrency: 2 users reserving final 90 EA simultaneously):** Tested Optimistic Locking via `version` column. The second transaction fails or aborts due to a version mismatch, preventing negative available stock.

- **System-Wide ERD v1 Compilation (`erd_all.puml`):**
  - Collaborated with team members to consolidate individual PlantUML files across all 5 domains (A, B, C, D, E) into `erd_all.puml`. Successfully rendered the complete system ERD v1 diagram without orphan tables.

### 2. Next Steps

- Package all PlantUML source files (`.puml`), Data Dictionaries, and Business Rules documentation.
- Verify the **Definition of Done** checklist before submitting deliverables to Google Drive on Monday (09/28).
