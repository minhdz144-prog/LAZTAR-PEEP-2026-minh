+++
title = "Ngày 03 (Tuần 2) - 23/09/2026"
weight = 3
+++

## Báo cáo công việc chi tiết: Tuần 2 - Ngày 3

Hôm nay mình làm việc Remote. Đây là Ngày 1 trong chuỗi 4 ngày thực hiện **Sprint 0: Thiết kế nghiệp vụ & Database WMS**. Công việc chính bao gồm họp stand-up đầu ngày với nhóm, thống nhất bộ quy ước chung thiết kế Database và phác thảo mô hình sơ bộ cho Domain D.

### 1. Các hạng mục đã hoàn thành

- **Họp Stand-up & Thống nhất Quy ước chung thiết kế DB (Phần 3 Kế hoạch Sprint 0):**
  - **Quy tắc đặt tên:**
    - Tên bảng: Sử dụng `snake_case`, danh từ số nhiều, tiếng Anh (ví dụ: `lots`, `inventory`, `inventory_reservations`).
    - Tên cột: `snake_case`; Khóa chính luôn là `id`; Khóa ngoại chuẩn hóa theo cú pháp `<tên_bảng_số_ít>_id` (ví dụ: `warehouse_id`, `location_id`, `sku_id`, `lot_id`).
    - Cột cờ trạng thái / Loại dùng mã chữ in hoa: `ACTIVE`, `HOLD`, `EXPIRED`, `CLOSED`, `RELEASED`, `CONSUMED`, `CANCELLED`.
  - **Quy tắc Kiểu dữ liệu & Khóa:**
    - Khóa chính dùng `BIGINT` tự tăng (`IDENTITY`).
    - Số lượng số dư tồn kho sử dụng `DECIMAL(18,4)` để hỗ trợ đơn vị tính lẻ (kg, mét), cấm dùng kiểu `FLOAT`.
    - Thời gian lưu vết sử dụng `TIMESTAMPTZ` theo chuẩn UTC (hiển thị theo múi giờ client +07:00).
  - **Bộ cột Audit bắt buộc:** Mọi bảng trong Domain D phải có đủ 4 cột audit: `created_at`, `created_by`, `updated_at`, `updated_by` (tham chiếu tới `users.id`).

- **Phác thảo cấu trúc 3 bảng dữ liệu cho Domain D (Inventory Model):**
  - **Bảng `lots` (Quản lý Lô hàng):** Lưu vết số lô (`lot_no`), SKU liên kết, ngày sản xuất (`manufactured_at`), ngày hết hạn (`expiry_date`), ngày nhập đầu tiên và trạng thái lô.
  - **Bảng `inventory` (Số dư Tồn kho):** Lưu vết tồn kho thực tế tại từng BIN (`location_id`), phân loại theo SKU và Lot ID. Chứa các trường số lượng `qty_on_hand`, `qty_reserved`, `qty_available` và cột `version` cho cơ chế Optimistic Locking.
  - **Bảng `inventory_reservations` (Chi tiết Giữ chỗ):** Quản lý chi tiết việc giữ chỗ cho đơn xuất hàng hoặc chuyển kho. Tích hợp mã Idempotency UUID (`reservation_key`) chống trùng lặp.

### 2. Kế hoạch tiếp theo

- Bắt tay vào viết file mã nguồn sơ đồ ERD PlantUML (`domain_D.puml`).
- Hoàn thiện chi tiết Data Dictionary (Data Types, Nullable, Default values, Constraints, Descriptions) cho cả 3 bảng của Domain D.
- Soạn thảo danh sách các quy tắc nghiệp vụ Business Rules (gắn mã `BR-D-xx`).
