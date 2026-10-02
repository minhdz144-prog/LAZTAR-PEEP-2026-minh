+++
title = "Ngày 05 (Tuần 3) - 02/10/2026"
weight = 5
+++

## Báo cáo công việc chi tiết: Tuần 3 - Ngày 5

Hôm nay mình làm việc Remote (từ xa). Trọng tâm công việc trong ngày là phát triển và hoàn thiện trọn bộ 9 API Backend (từ Task **BE-12b** đến **BE-20**) thuộc các module Master Data Supplier, Inbound & Receiving, Putaway và Internal Location Transfer trên hệ thống Mini-WMS Backend (NestJS, Prisma ORM, PostgreSQL), đảm bảo tuân thủ 100% các quy tắc refactor trong `BACKEND_REFACTOR_HANDOVER.md`.

### 1. Các hạng mục đã hoàn thành

- **Đồng bộ Nhánh & Quản lý Git Flow:**
  - Cập nhật nhánh chính `PEEP1` mới nhất từ remote (`git pull origin PEEP1`).
  - Lần lượt phát triển các nhánh tính năng `feature/inbound-and-opening-stock` và `feature/internal-transfer-be19-be20`.

- **Phát triển Trọn bộ 9 API Backend (BE-12b đến BE-20):**
  - **Task BE-12b: API Cập nhật NCC & Quản lý liên kết SKU-Supplier:**
    - Bổ sung DTO `UpdateSupplierDto` và triển khai `PUT /api/master-data/suppliers/:id`.
    - Triển khai các API quản lý liên kết SKU - Nhà cung cấp (`sku_suppliers`).
  - **Task BE-13: API Import Tồn đầu kỳ (Opening Stock - Idempotent):**
    - Triển khai `POST /api/inbound/opening-stock`.
    - Đảm bảo tính idempotent, ngăn chặn chạy trùng 2 lần cùng một mã đợt import làm nhân đôi số lượng tồn kho.
  - **Task BE-14: API Tạo nháp Phiếu tiếp nhận hàng (GRN - Sơ đồ BF_01):**
    - Triển khai `POST /api/inbound/receipts`.
    - Cho phép ghi nhận thông tin nhà cung cấp, kho nhận và danh sách chi tiết lô hàng nông sản tiếp nhận.
  - **Task BE-15: API Kiểm tra & Xác thực mã Lô và Hạn sử dụng (BR-D-04, BR-D-05):**
    - Triển khai `POST /api/inbound/validate-lot`.
    - Kiểm tra bắt buộc cờ quản lý Lô nông sản, xác thực Hạn sử dụng (Expiration Date) phải sau Ngày sản xuất (Production Date).
  - **Task BE-16: API Xác nhận Nhập kho & Ghi thẻ kho nguyên tử:**
    - Triển khai `POST /api/inbound/receipts/:id/confirm`.
    - Ghi nhận 1 dòng giao dịch `RECEIPT` vào `stock_ledger` và tăng tồn kho tại ô nhận hàng (`RECV`) trong 1 Database Transaction.
  - **Task BE-17: API Tạo lệnh Cất hàng & Gợi ý ô kệ trống (Putaway Suggestion):**
    - Triển khai `POST /api/inbound/suggest-putaway`.
    - Tự động tìm kiếm và gợi ý các ô kệ trống loại `STORAGE` phù hợp với điều kiện lưu trữ và nhiệt độ của nông sản.
  - **Task BE-18: API Xác nhận Cất hàng vào kệ (Cặp giao dịch đối ứng):**
    - Triển khai `POST /api/inbound/confirm-putaway`.
    - Ghi cặp giao dịch đối ứng `PUTAWAY_OUT` (giảm tồn ở ô `RECV`) và `PUTAWAY_IN` (tăng tồn ở ô `STORAGE`) cùng chung `transaction_group_id`.
  - **Task BE-19: API Tạo yêu cầu chuyển hàng giữa các ô kệ (BF_03):**
    - Triển khai `POST /api/transfer/request`.
    - Kiểm tra ô kệ nguồn/đích, tự động quy đổi UoM về Base Quantity và kiểm tra tồn khả dụng (`qty_available`) tại vị trí nguồn.
  - **Task BE-20: API Kiểm tra tồn khả dụng & Xác nhận điều chuyển nội bộ (BR-D-09):**
    - Triển khai `POST /api/transfer/confirm`.
    - Ép buộc loại vị trí `BIN`, thực thi giao dịch đối ứng nguyên tử `TRANSFER_OUT` & `TRANSFER_IN` trong `this.prisma.withActor(...)`, cập nhật tồn kho `qty_on_hand` tuân thủ DB Trigger PostgreSQL.

- **Cập nhật Bảng Tiến độ Task (`docs/MiniWMS Task.xlsx`):**
  - Cập nhật toàn bộ trạng thái của 9 task từ **BE-12b đến BE-20** sang **Completed**.

- **Kiểm thử & Đảm bảo Tiêu chuẩn Code (Quality Gate):**
  - Định dạng toàn bộ mã nguồn theo chuẩn Prettier và kiểm tra ESLint (`npm run lint` -> **0 lỗi**).
  - Viết và thực thi trọn bộ kịch bản kiểm thử tích hợp (Integration Test scripts), xác nhận tất cả API phản hồi HTTP `200 OK` / `201 Created` thành công.
  - Tối ưu lịch sử Git commit, loại bỏ các file tạm khỏi tracking (`.gitignore` + `git commit --amend`).

### 2. Kế hoạch tiếp theo

- Đẩy nhánh `feature/internal-transfer-be19-be20` lên remote repository và gửi Pull Request (PR) cho nhóm review.
- Chuẩn bị tiếp tục giai đoạn tiếp theo cho các API Outbound (Xuất kho) và Báo cáo Kiểm kê tồn kho.
