+++
title = "Day 02 (Week 2) - 09/22/2026"
weight = 2
+++

## Detailed Work Report: Week 2 - Day 2

Today I worked On-Site at the office. The primary objective was analyzing the Sprint 0 Execution Plan document (Business & Database Design for WMS), participating in a team alignment meeting to divide the 5 sub-domains, and accepting my core role assignment for the project.

### 1. Completed Tasks

- **Analyzed Sprint 0 Execution Plan:**
  - Reviewed the official Sprint 0 timeline: Wednesday (09/23) through Monday (09/28/2026).
  - Identified the 4 mandatory group deliverables:
    1. Overall Business Flow diagram (Inbound, Outbound, Transfer, Adjustment) in PlantUML/Draw.io.
    2. System-wide ERD v1 in PlantUML (`.puml`) source format + rendered PNG image.
    3. Detailed Data Dictionary across all domain tables.
    4. Business Rules catalog with normalized code identifiers (`BR-xx-nn`).

- **Team Alignment & Domain Assignment:**
  - Participated in the 5-trainee team breakdown meeting. I took on the role of **Backend Developer** responsible for **Domain D – Inventory Model**.
  - Analyzed the scope of Domain D:
    - **Core Responsibility:** Designing DB schema for inventory balances (`inventory`), batch/lot management (`lots`), and reservation transactions (`inventory_reservations`).
    - **Inventory Formula Design:** `qty_available = qty_on_hand - qty_reserved`.
    - **Dependency Mapping:** Domain D directly depends on BIN-level location IDs from **Domain B (Warehouse Structure)** and SKU master data from **Domain C (Product & Supplier)**.
    - **Integration Point:** Domain D tightly couples with **Domain E (Stock Ledger & Movement)** to ensure synchronized audit logging within single DB transactions.

### 2. Next Steps

- Kick off Sprint 0 Day 1 (Wednesday, 09/23 - Remote).
- Align on naming conventions (`snake_case`), data types (BIGINT, DECIMAL, TIMESTAMPTZ), and mandatory audit columns with the entire team.
- Draft the initial PlantUML ERD model for Domain D.
