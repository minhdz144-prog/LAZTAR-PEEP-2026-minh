+++
title = "Ngày 02 (Tuần 4) - 06/10/2026"
weight = 2
+++

## Báo cáo công việc chi tiết: Tuần 4 - Ngày 2

Hôm nay mình làm việc On-Site (tại văn phòng). Trọng tâm công việc trong ngày là nghiên cứu, thiết kế và phát triển hoàn thiện 2 API Backend thuộc Phân hệ Báo cáo & Thẻ kho (Tasks **BE-33** và **BE-34**) trên hệ thống Mini-WMS Backend (NestJS, Prisma ORM, PostgreSQL), đảm bảo tuân thủ 100% các tiêu chuẩn mã nguồn trong `BACKEND_REFACTOR_HANDOVER.md`.

### 1. Các hạng mục đã hoàn thành

- **Đồng bộ Nhánh & Quản lý Git Flow:**
  - Đồng bộ nhánh chính `PEEP1` với các cập nhật mới nhất từ remote (`git pull origin PEEP1`).
  - Tạo nhánh tính năng mới `feature/reports-and-audit-be33-be34` để thực hiện toàn bộ công việc trong ngày.

- **Phát triển API Báo cáo & Truy xuất Thẻ kho (BE-33 và BE-34):**
  - **Task BE-33: API Báo cáo Tồn kho trực quan theo Kệ/Lô & Cảnh báo hạn dùng:**
    - Triển khai `GET /api/reports/inventory-visual`.
    - Phân nhóm tồn kho trực quan theo Kho (`warehouse`), Vị trí kệ/ô (`location`), Sản phẩm (`sku`) và Lô hàng (`lot`).
    - Tính toán số ngày còn hạn sử dụng (`daysUntilExpiry`) và tự động phân loại mức độ rủi ro nông sản (`expiryStatus`: `EXPIRED`, `EXPIRING_3_DAYS`, `EXPIRING_7_DAYS`, `SAFE`).
    - Tổng hợp đối tượng métrik `summary` (Tổng tồn kho, Tồn khả dụng, Tồn giữ chỗ, Số lượng lô hết hạn/sắp hết hạn).
    - Hỗ trợ đa dạng bộ lọc: `warehouseId`, `locationId`, `skuId`, `expiryRisk`, `search` (tìm theo SKU, Lô, Vị trí), `page`, `limit`.
  - **Task BE-34: API Báo cáo Truy xuất Lịch sử thẻ kho & Sổ chi tiết hàng hóa:**
    - Triển khai `GET /api/reports/stock-ledger-history`.
    - Truy xuất toàn bộ lịch sử biến động nhập/xuất kho từ bảng `stock_ledger`.
    - Tính toán tổng hợp dòng chuyển động `summary` (Tổng lượng Nhập `totalInQuantity`, Tổng lượng Xuất `totalOutQuantity`, Biến động ròng `netMovement`).
    - Hỗ trợ bộ lọc nâng cao theo `warehouseId`, `skuId`, `lotNo`, `movementType`, `referenceType`, khoảng thời gian (`fromDate`, `toDate`), phân trang `page`, `limit`.

- **Cập nhật Tiến độ Bảng Task (`docs/MiniWMS Task.xlsx`):**
  - Đánh dấu hoàn thành toàn bộ trạng thái của **BE-33** và **BE-34** sang **Completed**.

- **Bảo mật, Phân quyền & Đồng bộ Cơ sở dữ liệu:**
  - Thêm định nghĩa hằng số quyền `PERMISSION.REPORT.READ` (`REPORT.READ`) trong `permission.constant.ts`.
  - Bảo vệ các Route bằng Guard `@RequirePermission(PERMISSION.REPORT.READ)`.
  - Viết script seed tự động gán quyền `REPORT.READ` cho Role `ADMIN`.
  - Khắc phục và bổ sung đầy đủ các cột Audit (`is_active`, `created_at`, `created_by`, `updated_at`, `updated_by`, `token_version`, `refresh_token_hash`) trên cơ sở dữ liệu Neon DB.

- **Đảm bảo Chất lượng Mã nguồn (Quality Gate) & Kiểm thử:**
  - Định dạng toàn bộ mã nguồn theo chuẩn Prettier.
  - Thực thi toàn bộ Unit Tests (`npm run test`): Pass **22/22 Test Suites**, **137/137 Unit Tests** thành công.
  - Chạy script kiểm thử tích hợp (`test_be33_be34.js`), xác nhận cả 2 API hoạt động ổn định và trả về HTTP Status `200 OK`.

- **Hoàn tất Commit & Push Git:**
  - Thực hiện `git add .` và `git commit` trên nhánh `feature/reports-and-audit-be33-be34`.
  - Push thành công nhánh `feature/reports-and-audit-be33-be34` lên Remote Repository.

### 2. Kế hoạch tiếp theo

- Gửi kịch bản kiểm thử Swagger UI và mẫu Pull Request (PR) cho team review.
- Chuẩn bị cho các task thuộc phân hệ Kiểm kê kho (Stock Take) và Báo cáo Phân tích Dashboard Analytics tiếp theo.
