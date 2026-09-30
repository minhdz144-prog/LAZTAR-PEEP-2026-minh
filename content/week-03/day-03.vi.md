+++
title = "Ngày 03 (Tuần 3) - 30/09/2026"
weight = 3
+++

## Báo cáo công việc chi tiết: Tuần 3 - Ngày 3

Hôm nay mình làm việc Onsite tại văn phòng công ty. Trọng tâm công việc trong ngày là xây dựng hoàn chỉnh Prisma Schema 20 bảng cho cả 5 Domain WMS, tối ưu hóa cấu trúc cơ sở dữ liệu theo góp ý từ Team Lead & Mentor, triển khai migration và nạp seed data lên cả môi trường Docker local lẫn Database Neon Cloud dùng chung của team, đồng thời phát triển Module Inventory (Domain D) trong NestJS, tích hợp Swagger UI và hợp nhất Pull Request #2 vào nhánh chính của nhóm (`PEEP1`).

### 1. Các hạng mục đã hoàn thành

- **Xây dựng & Tối ưu hóa Prisma Schema 20 Bảng (5 Domain WMS):**
  - Khai báo đầy đủ 20 bảng mô hình hóa chính xác từ Data Dictionary v1 audit qua 5 Domain cốt lõi:
    - *Domain A (Auth & RBAC)*: `users`, `roles`, `permissions`, `user_roles`, `role_permissions`
    - *Domain B (Warehouse Structure)*: `warehouses`, `locations`
    - *Domain C (Product & Supplier)*: `categories`, `suppliers`, `uoms`, `skus`, `sku_suppliers`, `sku_uoms`, `sku_barcodes`
    - *Domain D (Inventory Model)*: `lots`, `inventory`, `inventory_reservations`
    - *Domain E (Stock Ledger & Movement)*: `reference_types`, `movement_types`, `stock_ledger`
  - Chuẩn hóa schema theo phản hồi và kiểm duyệt của Team Lead Khoan Tạ:
    - Chuyển đổi toàn bộ Khóa chính (`id`) và Khóa ngoại ở cả 20 bảng từ `Int` sang `BigInt`.
    - Chuẩn hóa bảng `users` (`full_name`, `password_hash`, `failed_login_count`, `locked_until`, `birth_day` & `deleted_at` dạng `Timestamptz(6)`, loại bỏ các cột trùng lặp `name`, `password`, `role`).
    - Thêm quan hệ audit `@relation` cho `created_by` và `updated_by` trỏ về `users(id)`.
    - Thêm các chỉ mục hiệu năng (`@@index`) cho bảng `stock_ledger` (`[warehouse_id, sku_id, created_at]`, `[transaction_group_id]`, `[reference_type_id, reference_id]`).

- **Thực thi Migration, Script Seed Data & Đẩy dữ liệu lên Neon Cloud DB:**
  - Khởi tạo thành công file migration SQL chính thức (`20260930072142_init_wms`) bằng `npx prisma migrate dev --name init_wms`.
  - Viết script seed data tự động (`prisma/seed.ts`) tạo dữ liệu mẫu khởi tạo cho toàn bộ 20 bảng.
  - Chạy đồng bộ cơ sở dữ liệu và nạp dữ liệu mẫu thành công trên môi trường PostgreSQL Docker local (`mini-wms-db`).
  - Đẩy đồng bộ 20 bảng DB cùng dữ liệu seed mẫu lên **Database Neon Cloud** dùng chung cho nhóm PEEP1 (`PEEP1` cluster) phục vụ test tích hợp toàn nhóm.

- **Phát triển NestJS Inventory Module (Domain D), Tích hợp Swagger & Merge Code PR #2:**
  - Xây dựng `InventoryModule` (`InventoryController`, `InventoryService`, DTOs hỗ trợ tra cứu tồn kho, xem chi tiết và tạo đặt trước kho với cơ chế Optimistic Locking `version`).
  - Thêm polyfill `BigInt.prototype.toJSON` trong `src/main.ts` giúp NestJS trả về dữ liệu BigInt dạng JSON không bị lỗi.
  - Cấu hình Swagger UI giao diện trực quan tại `http://localhost:3069/api-docs`.
  - Kiểm thử biên dịch NestJS sạch 0 lỗi (`npm run build`), commit, push và hợp nhất thành công Pull Request #2 vào nhánh `PEEP1`.

### 2. Kế hoạch tiếp theo

- Phối hợp với các thành viên trong nhóm tích hợp Guard phân quyền RBAC và Middleware xác thực với `user_roles`.
- Bắt đầu triển khai thuật toán phân bổ hàng xuất kho theo tiêu chuẩn FEFO (First-Expired-First-Out) và ghi sổ thẻ kho `stock_ledger`.
