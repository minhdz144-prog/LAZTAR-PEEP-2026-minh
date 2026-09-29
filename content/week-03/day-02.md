+++
title = "Day 02 (Week 3) - 09/29/2026"
weight = 2
+++

## Detailed Work Report: Week 3 - Day 2

Today I worked On-Site at the office. The primary objective was participating in the Sprint 0 retrospective review session with Mentors/Team Leaders, and researching & setting up the local PostgreSQL database environment via Docker for the **Mini-WMS (FreshLink Produce)** project.

### 1. Completed Tasks

- **Sprint 0 Retrospective & Mentor Review Session:**
  - Presented the business and database design outputs for **Domain D – Inventory Model**.
  - Confirmed successful upload and submission of all Sprint 0 deliverables to Google Drive: [Sprint 0 Deliverables - Google Drive](https://drive.google.com/drive/folders/17OlEGvn8UxOHZ_T6Hw--2NqNNPheBLxh).
  - Received positive feedback from Mentors regarding the detail of the Data Dictionary (`qty_on_hand`, `qty_reserved`, `qty_available` separation), UUID idempotency hold mechanisms (`reservation_key`), and Optimistic Locking (`version`).

- **Researched & Configured PostgreSQL Database via Docker:**
  - Explored using Docker Desktop and Docker Compose to spin up a local PostgreSQL 16 container, providing an isolated database environment for the NestJS Backend.
  - Authored `docker-compose.yml` defining the PostgreSQL service (setting container_name, environment variables `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`, port mapping `5432:5432`, and persistent data volume).
  - Successfully launched the PostgreSQL container and verified database connectivity via Beekeeper Studio / DBeaver.

- **Backend NestJS & ORM Connection Preparation:**
  - Configured `DATABASE_URL` environment string in `.env` referencing the local PostgreSQL Docker container.
  - Prepared Prisma ORM schema mapping for Domain D tables (`lots`, `inventory`, `inventory_reservations`).

### 2. Next Steps

- Execute Prisma Migration to initialize physical tables on the PostgreSQL Docker instance.
- Begin implementing the core `InventoryLedgerModule` and `InventoryService`.
