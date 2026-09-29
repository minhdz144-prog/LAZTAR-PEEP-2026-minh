+++
title = "Day 03 (Week 2) - 09/23/2026"
weight = 3
+++

## Detailed Work Report: Week 2 - Day 3

Today I worked Remotely. This marked Day 1 of **Sprint 0: Business & Database Design for WMS**. Key tasks included the morning team stand-up, finalizing system-wide Database design conventions, and drafting the preliminary architecture for Domain D.

### 1. Completed Tasks

- **Morning Stand-up & System-wide DB Conventions Alignment (Sprint 0 Plan §3):**
  - **Naming Rules:**
    - Tables: `snake_case`, plural, English (`lots`, `inventory`, `inventory_reservations`).
    - Columns: `snake_case`; Primary Key is strictly `id`; Foreign Keys formatted as `<singular_table_name>_id` (e.g., `warehouse_id`, `location_id`, `sku_id`, `lot_id`).
    - Status/Type flags in UPPERCASE: `ACTIVE`, `HOLD`, `EXPIRED`, `CLOSED`, `RELEASED`, `CONSUMED`, `CANCELLED`.
  - **Data Types & Key Specs:**
    - Primary Keys: Auto-incrementing `BIGINT` (`IDENTITY`).
    - Inventory quantities: `DECIMAL(18,4)` to support fractional units (kg, meters); `FLOAT` is strictly prohibited.
    - Timestamp tracking: `TIMESTAMPTZ` stored in UTC (rendered in client timezone +07:00).
  - **Mandatory Audit Columns:** All tables in Domain D must include 4 audit columns: `created_at`, `created_by`, `updated_at`, `updated_by` (FKs referencing `users.id`).

- **Architectural Drafting of 3 Domain D Tables (Inventory Model):**
  - **Table `lots` (Lot/Batch Management):** Tracks manufacturer lot numbers (`lot_no`), associated SKU ID, production date (`manufactured_at`), expiration date (`expiry_date`), first received timestamp, and lot status.
  - **Table `inventory` (Inventory Balances):** Tracks physical balance at specific BIN locations (`location_id`), categorized by SKU ID and Lot ID. Holds quantity columns `qty_on_hand`, `qty_reserved`, `qty_available`, and a `version` column for Optimistic Locking.
  - **Table `inventory_reservations` (Hold/Reservation Details):** Manages item reservation instances allocated for outbound orders or transfers. Integrates a UUID idempotency key (`reservation_key`) to prevent duplicate holds.

### 2. Next Steps

- Begin authoring the PlantUML ERD source script (`domain_D.puml`).
- Complete the full Data Dictionary specification (Data Types, Nullability, Default Values, Constraints, Descriptions) for Domain D's 3 tables.
- Draft the Business Rules document (prefixed with `BR-D-xx`).
