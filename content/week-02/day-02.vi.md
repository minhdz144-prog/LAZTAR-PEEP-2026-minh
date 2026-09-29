+++
title = "Ngày 02 (Tuần 2) - 22/09/2026"
weight = 2
+++

## Báo cáo công việc chi tiết: Tuần 2 - Ngày 2

Hôm nay mình làm việc Onsite tại văn phòng công ty. Trọng tâm công việc là phân tích tài liệu Kế hoạch Sprint 0 (Thiết kế nghiệp vụ & Database WMS), tham gia họp nhóm để phân chia phạm vi 5 domain và nhận vai trò phân công chính cho dự án.

### 1. Các hạng mục đã hoàn thành

- **Nghiên cứu Kế hoạch thực hiện Sprint 0:**
  - Nắm rõ mốc thời gian làm việc Sprint 0: Từ Thứ 4 (23/09) đến Thứ 2 (28/09/2026).
  - Xác định 4 bộ sản phẩm đầu ra (Deliverables) bắt buộc của nhóm:
    1. Business Flow tổng quan (Inbound, Outbound, Transfer, Adjustment) bằng PlantUML/Draw.io.
    2. ERD v1 toàn hệ thống dạng file mã nguồn PlantUML (`.puml`) + ảnh xuất PNG.
    3. Data Dictionary chi tiết dạng bảng.
    4. Danh sách các quy tắc nghiệp vụ Business Rules (gắn mã `BR-xx-nn`).

- **Họp nhóm Trainee phân chia vai trò & đảm nhận Domain:**
  - Nhóm 5 thành viên họp chốt phân công công việc. Mình đăng ký đảm nhận vai trò **Backend Developer** phụ trách **Domain D – Inventory Model (Mô hình quản lý tồn kho)**.
  - Phân tích chi tiết phạm vi đảm nhận của Domain D:
    - **Nhiệm vụ lõi:** Thiết kế cấu trúc bảng lưu trữ số dư tồn kho (`inventory`), thông tin lô hàng (`lots`) và quản lý các giao dịch giữ chỗ (`inventory_reservations`).
    - **Thiết kế công thức tính tồn:** `qty_available = qty_on_hand - qty_reserved`.
    - **Xác định các điểm phụ thuộc:** Domain D trực tiếp phụ thuộc vào thông tin vị trí kho cấp BIN từ **Domain B (Warehouse Structure)** và danh mục sản phẩm từ **Domain C (Product & Supplier)**.
    - **Xác định điểm tích hợp:** Domain D liên kết chặt chẽ với **Domain E (Stock Ledger & Movement)** để ghi nhận nhật ký biến động kho trong cùng Database Transaction.

### 2. Kế hoạch tiếp theo

- Chuẩn bị bước vào Ngày 1 của Sprint 0 (Thứ 4, 23/09 - Remote).
- Thống nhất các quy ước đặt tên (naming conventions), kiểu dữ liệu (BIGINT, DECIMAL, TIMESTAMPTZ) và các cột audit chung với cả nhóm.
- Phác thảo sơ đồ ERD nháp cho Domain D.
