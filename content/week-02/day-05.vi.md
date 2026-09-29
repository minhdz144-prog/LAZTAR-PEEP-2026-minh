+++
title = "Ngày 05 (Tuần 2) - 25/09/2026"
weight = 5
+++

## Báo cáo công việc chi tiết: Tuần 2 - Ngày 5

Hôm nay mình làm việc Remote. Đây là Ngày 3 của **Sprint 0: Thiết kế nghiệp vụ & Database WMS**. Nhiệm vụ chính hôm nay bao gồm tham gia buổi họp tích hợp 60 phút toàn đội, review chéo các điểm kết nối giữa các domain và chạy thử 8 kịch bản kiểm thử thiết kế trên giấy (Paper UAT).

### 1. Các hạng mục đã hoàn thành

- **Họp Tích hợp hệ thống & Review chéo các điểm nối Domain (Checklist Mục 6):**
  - **B ↔ D (Warehouse Structure ↔ Inventory Model):** 
    - Thống nhất ràng buộc `inventory.location_id` chỉ được tham chiếu tới các vị trí có `location_type = 'BIN'`.
    - Xác định quy tắc: Tồn kho nằm ở các vị trí có `purpose = 'DAMAGED'` hoặc `'QC'` sẽ không được cộng vào số lượng khả dụng (`qty_available`) để bán.
  - **C ↔ D (Product & Supplier ↔ Inventory Model):**
    - Thống nhất mọi số lượng tồn kho trong bảng `inventory` đều quy đổi về **Base UoM** từ bảng `skus`.
    - Kiểm tra cờ `is_lot_tracked` từ bảng `skus`: Khi `is_lot_tracked = true` thì bản ghi `inventory` bắt buộc phải có `lot_id` tham chiếu tới bảng `lots`.
  - **D ↔ E (Inventory Model ↔ Stock Ledger & Movement):**
    - Đồng bộ hóa bộ khóa duy nhất: `(location_id, sku_id, lot_id)`.
    - Đảm bảo quy tắc bất biến: Mỗi thao tác biến động tồn kho vật lý (`qty_on_hand`) phải cập nhật bảng `inventory` và thêm một dòng nhật ký vào `stock_ledger` trong **cùng một Database Transaction**.
    - Làm rõ quy tắc: Thao tác giữ chỗ (`reserve`/`release`) chỉ tác động lên `inventory_reservations` và cột `qty_reserved` của `inventory`, không tạo dòng nhật ký trong `stock_ledger`.

- **Chạy thử 8 Kịch bản kiểm thử thiết kế trên giấy (Paper UAT - Mục 7 Kế hoạch):**
  - **Kịch bản 1 (Nhập kho 10 BOX SKU-001):** Quy đổi 10 BOX (1 BOX = 12 EA) = +120 EA. Bảng `stock_ledger` thêm dòng +120 RECEIPT, `inventory` cập nhật `qty_on_hand = 120`.
  - **Kịch bản 3 (Đơn xuất 30 EA giữ chỗ):** `inventory` ghi nhận `qty_reserved = 30`, `qty_available = 90`. `qty_on_hand` giữ nguyên 120, `stock_ledger` không ghi dòng mới.
  - **Kịch bản 4 (Pick 30 EA và Ship):** `inventory` cập nhật `qty_on_hand = 90`, `qty_reserved = 0`. Bảng `stock_ledger` ghi nhận dòng -30 PICK/SHIP.
  - **Kịch bản 8 (Xử lý đồng thời 2 người cùng giữ chỗ 90 EA cuối):** Kiểm thử cơ chế Optimistic Locking qua cột `version`. Người đến sau bị lùi giao dịch hoặc từ chối do `version` đã thay đổi, đảm bảo chống tồn âm.

- **Gộp và Render ERD v1 toàn hệ thống (`erd_all.puml`):**
  - Phối hợp cùng cả nhóm gộp tất cả các file mã nguồn PlantUML của 5 domain (A, B, C, D, E) thành file sơ đồ tổng thể `erd_all.puml`. Render thành công ảnh sơ đồ ERD hệ thống v1 chuẩn mực, không có bảng "mồ côi".

### 2. Kế hoạch tiếp theo

- Đóng gói toàn bộ file mã nguồn ERD (`.puml`), Data Dictionary và Business Rules.
- Rà soát lại checklist **Definition of Done** trước khi nộp lên Google Drive vào Thứ 2 (28/09).
