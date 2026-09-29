+++
title = "Ngày 02 (Tuần 3) - 29/09/2026"
weight = 2
+++

## Báo cáo công việc chi tiết: Tuần 3 - Ngày 2

Hôm nay mình làm việc Onsite tại văn phòng công ty. Công việc chính trong ngày là tham gia buổi họp tổng kết đánh giá kết quả Sprint 0 cùng Mentor/Leader, đồng thời tập trung tìm hiểu và thiết lập môi trường cơ sở dữ liệu PostgreSQL bằng Docker cho dự án **Mini-WMS (FreshLink Produce)**.

### 1. Các hạng mục đã hoàn thành

- **Họp Tổng kết Sprint 0 & Nhận Đánh giá từ Mentor/Leader:**
  - Trình bày kết quả thiết kế nghiệp vụ và cơ sở dữ liệu của **Domain D – Inventory Model**.
  - Đã đóng gói và nộp hoàn tất toàn bộ bộ tài liệu thiết kế Sprint 0 lên Google Drive công ty: [Sprint 0 Deliverables - Google Drive](https://drive.google.com/drive/folders/17OlEGvn8UxOHZ_T6Hw--2NqNNPheBLxh).
  - Nhận phản hồi tích cực từ Mentor về độ chi tiết của Data Dictionary (phân định rõ `qty_on_hand`, `qty_reserved`, `qty_available`), cơ chế khóa Idempotency UUID (`reservation_key`) và kỹ thuật chống ghi đè đồng thời Optimistic Locking (`version`).

- **Nghiên cứu & Thiết lập Cơ sở dữ liệu PostgreSQL bằng Docker:**
  - Tìm hiểu cách sử dụng Docker và Docker Desktop để khởi chạy container PostgreSQL 16 local, giúp giả lập môi trường DB cách ly chuẩn mực cho dự án Backend NestJS.
  - Cấu hình file `docker-compose.yml` định nghĩa service PostgreSQL (xác định container_name, environment variables `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`, port mapping `5432:5432` và persistent volume storage).
  - Khởi chạy thành công PostgreSQL container và kiểm tra kết nối DB bằng Beekeeper Studio / DBeaver.

- **Chuẩn bị cấu hình ORM & Backend NestJS:**
  - Nghiên cứu kết nối chuỗi `DATABASE_URL` từ file môi trường `.env` tới PostgreSQL container.
  - Chuẩn bị sẵn sàng khởi tạo Prisma ORM schema cho Domain D (`lots`, `inventory`, `inventory_reservations`) trong bước tiếp theo.

### 2. Kế hoạch tiếp theo

- Khởi tạo Prisma Schema cho Domain D và chạy Prisma Migration đầu tiên trên PostgreSQL container.
- Bắt đầu xây dựng module lõi `InventoryLedgerModule` và các service xử lý tồn kho.
