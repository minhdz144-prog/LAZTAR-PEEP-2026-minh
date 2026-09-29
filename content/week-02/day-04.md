+++
title = "Day 04 (Week 2) - 09/24/2026"
weight = 4
+++

## Detailed Work Report: Week 2 - Day 4

Today I worked Remotely. This was Day 2 of **Sprint 0: Business & Database Design for WMS**. The primary focus was finalizing the detailed Data Dictionary, the PlantUML ERD diagram, and the Business Rules suite for **Domain D – Inventory Model**.

### 1. Completed Tasks

- **Designed Detailed Data Dictionary for Domain D (3 Core Tables):**
  1. **Table `lots` (10 columns):**
     - `id`: BIGINT (PK, IDENTITY).
     - `sku_id`: BIGINT (FK → `skus.id`).
     - `lot_no`: VARCHAR(100) (Composite UK with `sku_id`).
     - `manufactured_at`, `expiry_date`: DATE (CHECK constraint: `expiry_date >= manufactured_at`).
     - `first_received_at`: TIMESTAMPTZ.
     - `status`: VARCHAR(20) (CHECK: `'ACTIVE'`, `'HOLD'`, `'EXPIRED'`, `'CLOSED'`).
     - Audit columns: `created_at`, `created_by`, `updated_at`, `updated_by`.

  2. **Table `inventory` (11 columns):**
     - `id`: BIGINT (PK, IDENTITY).
     - `warehouse_id`: BIGINT (FK → `warehouses.id`).
     - `location_id`: BIGINT (FK → `locations.id`, strictly BIN level).
     - `sku_id`: BIGINT (FK → `skus.id`).
     - `lot_id`: BIGINT (FK → `lots.id`, NULLable if SKU is not lot-tracked).
     - `qty_on_hand`: DECIMAL(18,4) (CHECK `>= 0`, physical stock balance).
     - `qty_reserved`: DECIMAL(18,4) (CHECK `0 <= qty_reserved <= qty_on_hand`).
     - `qty_available`: DECIMAL(18,4) (GENERATED column: `qty_on_hand - qty_reserved`, direct UPDATE prohibited).
     - `version`: INT (DEFAULT 0, incremented on every UPDATE - Optimistic Locking).
     - Audit columns: `created_at`, `created_by`, `updated_at`, `updated_by`.

  3. **Table `inventory_reservations` (11 columns):**
     - `id`: BIGINT (PK, IDENTITY).
     - `inventory_id`: BIGINT (FK → `inventory.id`).
     - `reservation_key`: UUID (UK, `gen_random_uuid()`, idempotency key).
     - `reference_type_id`: BIGINT (FK → `reference_types.id`).
     - `reference_id`: VARCHAR(100) (Source document ID, e.g., SO/PO).
     - `quantity`: DECIMAL(18,4) (CHECK `> 0`).
     - `status`: VARCHAR(20) (CHECK: `'ACTIVE'`, `'RELEASED'`, `'CONSUMED'`, `'EXPIRED'`, `'CANCELLED'`).
     - `reserved_at`, `expires_at`, `released_at`: TIMESTAMPTZ.
     - Audit columns: `created_at`, `created_by`, `updated_at`, `updated_by`.

- **Authored PlantUML ERD Diagram (`domain_D.puml`):**
  - Created the PlantUML script defining entities, attributes, data types, constraints (PK/FK/UK/CHECK), and relationships: `lots ||--o{ inventory`, `inventory ||--o{ inventory_reservations`.

- **Formulated Domain D Business Rules (Pre-fixed `BR-D-xx`):**
  - `BR-D-01`: Reserved quantity (`qty_reserved`) at any location must never exceed physical quantity on hand (`qty_on_hand`).
  - `BR-D-02`: Available inventory (`qty_available`) is a calculated value (`qty_on_hand - qty_reserved`); direct UPDATE operations are strictly forbidden.
  - `BR-D-03`: All inventory hold requests must specify or generate a UUID `reservation_key` to guarantee API idempotency.
  - `BR-D-04`: Every update operation on an `inventory` record must execute Optimistic Locking by verifying and incrementing the `version` field.
  - `BR-D-05`: For SKUs marked with `is_lot_tracked = true`, a valid `lot_id` is mandatory when recording inventory balances.

### 2. Next Steps

- Prepare for Friday's System Integration & Cross-Domain Review session (09/25).
- Execute the 8 paper-based UAT test scenarios across domain boundaries.
