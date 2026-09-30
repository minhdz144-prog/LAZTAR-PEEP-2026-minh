+++
title = "Day 03 (Week 3) - 09/30/2026"
weight = 3
+++

## Detailed Work Report: Week 3 - Day 3

Today I worked On-Site at the company office. The primary focus was building the complete 20-table Prisma Schema for all 5 WMS domains, optimizing schema architecture per Team Lead & Mentor feedback, deploying migrations and seed data both locally and to the shared Neon Cloud DB, developing the Domain D NestJS Inventory Module with Swagger UI, and merging Pull Request #2 into the main team branch (`PEEP1`).

### 1. Completed Tasks

- **Built & Refactored Complete 20-Table Prisma Schema (5 WMS Domains):**
  - Modeled all 20 tables matching the audited Data Dictionary v1 across 5 core domains:
    - *Domain A (Auth & RBAC)*: `users`, `roles`, `permissions`, `user_roles`, `role_permissions`
    - *Domain B (Warehouse Structure)*: `warehouses`, `locations`
    - *Domain C (Product & Supplier)*: `categories`, `suppliers`, `uoms`, `skus`, `sku_suppliers`, `sku_uoms`, `sku_barcodes`
    - *Domain D (Inventory Model)*: `lots`, `inventory`, `inventory_reservations`
    - *Domain E (Stock Ledger & Movement)*: `reference_types`, `movement_types`, `stock_ledger`
  - Refactored schema based on Team Lead Khoan Ta's review:
    - Upgraded all Primary Keys (`id`) and Foreign Keys across all 20 tables to `BigInt`.
    - Standardized `users` model (`full_name`, `password_hash`, `failed_login_count`, `locked_until`, `birth_day` & `deleted_at` as `Timestamptz(6)`, removing redundant `name`, `password`, and `role` fields).
    - Added `@relation` audit links for `created_by` and `updated_by` referencing `users(id)`.
    - Added composite performance indexes (`@@index`) on `stock_ledger` (`[warehouse_id, sku_id, created_at]`, `[transaction_group_id]`, `[reference_type_id, reference_id]`).

- **Database Migration, Seeding & Neon Cloud Deployment:**
  - Generated official initial SQL migration (`20260930072142_init_wms`) via `npx prisma migrate dev --name init_wms`.
  - Authored comprehensive seeding script (`prisma/seed.ts`) populating seed records for all 5 domains.
  - Successfully synced schema and executed seed data on local PostgreSQL Docker instance (`mini-wms-db`).
  - Deployed all 20 tables and initial seed dataset to the shared Team **Neon Cloud Database** (`PEEP1` cluster) for team-wide integration testing.

- **Implemented Domain D NestJS Module, Swagger & Merged PR #2:**
  - Built `InventoryModule` (`InventoryController`, `InventoryService`, DTOs supporting stock query, detail lookup, and stock reservation with optimistic lock `version`).
  - Added `BigInt.prototype.toJSON` global polyfill in `src/main.ts` ensuring clean JSON API responses.
  - Configured Swagger API Documentation at `http://localhost:3069/api-docs`.
  - Verified 0 NestJS compilation errors (`npm run build`), committed, pushed, and merged Pull Request #2 into `PEEP1` branch.

### 2. Next Steps

- Coordinate with team members on integrating RBAC guards and authentication middleware with `user_roles`.
- Implement FEFO (First-Expired-First-Out) batch allocation and stock ledger transaction posting in `InventoryService`.
