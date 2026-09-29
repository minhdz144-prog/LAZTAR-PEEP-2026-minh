+++
title = "Ngày 04 (Tuần 2) - 24/09/2026"
weight = 4
+++

## Báo cáo công việc chi tiết: Tuần 2 - Ngày 4

Hôm nay mình làm việc Remote. Đây là Ngày 2 của **Sprint 0: Thiết kế nghiệp vụ & Database WMS**. Trọng tâm hôm nay là hoàn thiện toàn bộ thiết kế chi tiết Data Dictionary, sơ đồ ERD PlantUML và bộ Business Rules cho **Domain D – Inventory Model**.

### 1. Các hạng mục đã hoàn thành

- **Thiết kế chi tiết Data Dictionary cho 3 bảng thuộc Domain D:**
  1. **Bảng `lots` (10 cột):**
     - `id`: BIGINT (PK, IDENTITY).
     - `sku_id`: BIGINT (FK → `skus.id`).
     - `lot_no`: VARCHAR(100) (UK ghép với `sku_id`).
     - `manufactured_at`, `expiry_date`: DATE (Ràng buộc CHECK `expiry_date >= manufactured_at`).
     - `first_received_at`: TIMESTAMPTZ.
     - `status`: VARCHAR(20) (CHECK: `'ACTIVE'`, `'HOLD'`, `'EXPIRED'`, `'CLOSED'`).
     - Audit columns: `created_at`, `created_by`, `updated_at`, `updated_by`.

  2. **Bảng `inventory` (11 cột):**
     - `id`: BIGINT (PK, IDENTITY).
     - `warehouse_id`: BIGINT (FK → `warehouses.id`).
     - `location_id`: BIGINT (FK → `locations.id`, chỉ được gắn vào cấp BIN).
     - `sku_id`: BIGINT (FK → `skus.id`).
     - `lot_id`: BIGINT (FK → `lots.id`, NULLable nếu SKU không quản lý lô).
     - `qty_on_hand`: DECIMAL(18,4) (CHECK `>= 0`, tồn vật lý thực tế).
     - `qty_reserved`: DECIMAL(18,4) (CHECK `0 <= qty_reserved <= qty_on_hand`).
     - `qty_available`: DECIMAL(18,4) (Trường GENERATED: `qty_on_hand - qty_reserved`, cấm ghi trực tiếp).
     - `version`: INT (DEFAULT 0, tăng 1 mỗi lần UPDATE - Optimistic Locking).
     - Audit columns: `created_at`, `created_by`, `updated_at`, `updated_by`.

  3. **Bảng `inventory_reservations` (11 cột):**
     - `id`: BIGINT (PK, IDENTITY).
     - `inventory_id`: BIGINT (FK → `inventory.id`).
     - `reservation_key`: UUID (UK, `gen_random_uuid()`, khóa idempotency).
     - `reference_type_id`: BIGINT (FK → `reference_types.id`).
     - `reference_id`: VARCHAR(100) (Mã chứng từ nguồn SO/PO).
     - `quantity`: DECIMAL(18,4) (CHECK `> 0`).
     - `status`: VARCHAR(20) (CHECK: `'ACTIVE'`, `'RELEASED'`, `'CONSUMED'`, `'EXPIRED'`, `'CANCELLED'`).
     - `reserved_at`, `expires_at`, `released_at`: TIMESTAMPTZ.
     - Audit columns: `created_at`, `created_by`, `updated_at`, `updated_by`.

- **Vẽ sơ đồ PlantUML ERD (`domain_D.puml`):**
  - Xây dựng file PlantUML mô tả chính xác các entity, thuộc tính, kiểu dữ liệu, các ràng buộc PK/FK/UK/CHECK và mối quan hệ giữa các bảng: `lots ||--o{ inventory`, `inventory ||--o{ inventory_reservations`.

- **Xây dựng bộ Business Rules cho Domain D (Prefix `BR-D-xx`):**
  - `BR-D-01`: Tổng số lượng giữ chỗ (`qty_reserved`) tại một vị trí không được vượt quá số lượng tồn vật lý (`qty_on_hand`).
  - `BR-D-02`: Tồn khả dụng (`qty_available`) là giá trị tính toán tự động (`qty_on_hand - qty_reserved`), cấm mọi thao tác UPDATE trực tiếp vào trường này.
  - `BR-D-03`: Mọi yêu cầu giữ chỗ hàng bắt buộc phải cung cấp hoặc sinh mã UUID `reservation_key` để đảm bảo tính Idempotency khi gọi API trùng lặp.
  - `BR-D-04`: Mọi cập nhật dòng dư tồn (`inventory`) đều phải thực hiện Optimistic Locking thông qua kiểm tra và tăng trường `version` lên 1.
  - `BR-D-05`: Đối với SKU có cờ `is_lot_tracked = true`, bắt buộc phải truyền `lot_id` hợp lệ khi ghi nhận tồn kho.

### 2. Kế hoạch tiếp theo

- Chuẩn bị cho buổi họp Tích hợp hệ thống & Review chéo giữa các cặp Domain (Thứ 6, 25/09).
- Chạy thử 8 kịch bản kiểm thử thiết kế trên giấy (Paper UAT).
