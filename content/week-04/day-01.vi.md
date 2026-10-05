+++
title = "Ngày 01 (Tuần 4) - 05/10/2026"
weight = 1
+++

## Báo cáo công việc chi tiết: Tuần 4 - Ngày 1

Hôm nay mình làm việc On-Site (tại văn phòng). Trọng tâm công việc trong ngày là phát triển, refactor và hoàn thiện trọn bộ 9 API Backend (từ Task **BE-21** đến **BE-29**) thuộc module Xuất Hàng (Outbound Order Processing) và Tiếp Nhận Hàng Trả Lại (Customer Returns) trên hệ thống Mini-WMS Backend (NestJS, Prisma ORM, PostgreSQL), đảm bảo tuân thủ 100% các quy tắc trong tài liệu `BACKEND_REFACTOR_HANDOVER.md`.

### 1. Các hạng mục đã hoàn thành

- **Đồng bộ Nhánh & Quản lý Git Flow:**
  - Cập nhật nhánh chính `PEEP1` mới nhất từ remote (`git pull origin PEEP1`).
  - Khởi tạo nhánh tính năng riêng biệt `feature/outbound-and-returns-be21-be29`.

- **Phát triển Trọn bộ 9 API Backend (BE-21 đến BE-29):**
  - **Task BE-21: API Xuất hàng - Tạo Đơn hàng xuất kho (Sales Order - Sơ đồ BF_02):**
    - Triển khai `POST /api/outbound/orders`.
    - Tích hợp `UomConversionService` tự động quy đổi số lượng đặt hàng về đơn vị chuẩn (`baseQuantity`), khởi tạo đơn ở trạng thái `DRAFT`.
  - **Task BE-22: API Xuất hàng - Thuật toán Tự động cấp phát tồn theo FEFO (Nguyên tắc 3):**
    - Triển khai `POST /api/outbound/allocate`.
    - Tự động tìm kiếm các ô `BIN` khả dụng và cấp phát tồn kho ưu tiên theo Hạn sử dụng ngắn nhất xuất trước (`expiry_date ASC`), cảnh báo khi kho bị thiếu hàng (`hasShortage`).
  - **Task BE-23: API Xuất hàng - Giữ chỗ tồn kho (Stock Reservation - BR-D-06, BR-D-07):**
    - Triển khai `POST /api/outbound/reserve`.
    - Tạo bản ghi giữ chỗ `inventory_reservations` và tăng `qty_reserved` trên bảng `inventory` tuân thủ DB constraint trigger `wms_reservation_balance`.
  - **Task BE-24: API Xuất hàng - Xử lý thiếu hàng (Short ship, Đổi hàng, Giao bù - Nguyên tắc 5):**
    - Triển khai `POST /api/outbound/handle-shortage`.
    - Hỗ trợ 3 phương án xử lý linh hoạt: Short Ship (hủy lượng thiếu), Substitution (đổi sang SKU tương đương) và Backorder (tạo đơn giao bù).
  - **Task BE-25: API Xuất hàng - Tạo lệnh Lấy hàng (Pick Task) theo lộ trình tối ưu:**
    - Triển khai `POST /api/outbound/pick-tasks`.
    - Gom nhóm các bản ghi giữ chỗ `ACTIVE` và sắp xếp lộ trình lấy hàng theo đường đi ngắn nhất (`location.code / full_path ASC`).
  - **Task BE-26: API Xuất hàng - Xác nhận lấy hàng & Chuyển sang khu chờ xuất STAGING:**
    - Triển khai `POST /api/outbound/confirm-pick`.
    - Trừ tồn thực tế `qty_on_hand` và giải phóng `qty_reserved` tại ô kệ nguồn, chuyển trạng thái reservation sang `COMPLETED`, tăng tồn tại ô `STAGING` và ghi cặp thẻ kho đối ứng `PICK_OUT` & `PICK_IN` trong 1 Database Transaction.
  - **Task BE-27: API Xuất hàng - Ghi nhận Cân thực tế nông sản (Catch Weight - Nguyên tắc 4):**
    - Triển khai `POST /api/outbound/catch-weight`.
    - Ghi nhận trọng lượng nông sản thực tế, tự động tính chênh lệch trọng lượng `weightVariance` và tỷ lệ phần trăm chênh lệch `variancePercentage`.
  - **Task BE-28: API Xuất hàng - Đóng gói đơn hàng & Xác nhận bàn giao vận chuyển (SHIP):**
    - Triển khai `POST /api/outbound/ship`.
    - Trừ tồn kho tại khu vực STAGING, ghi thẻ kho `SHIP` (hướng `OUT`) và chuyển trạng thái đơn hàng sang `DELIVERED`.
  - **Task BE-29: API Trả hàng - Tiếp nhận hàng trả & Phân loại QC / Bán lại / Hủy (RETURN_IN):**
    - Triển khai `POST /api/outbound/returns`.
    - Tiếp nhận đơn hàng khách trả lại (`CUSTOMER_RETURN`), phân loại sản phẩm (`RESTOCK`, `QC_HOLD`, `SCRAP`), kiểm tra bắt buộc SKU lot tracking policy và ghi thẻ kho `RETURN_IN`.

- **Cập nhật Bảng Tiến độ Task (`docs/MiniWMS Task.xlsx`):**
  - Cập nhật toàn bộ trạng thái của 9 task từ **BE-21 đến BE-29** sang **Completed**.

- **Bảo mật, Phân quyền & Đảm bảo Chất lượng Mã nguồn (Quality Gate):**
  - Khởi tạo hằng số quyền `OUTBOUND` và bảo vệ toàn bộ 9 Route bằng `@RequirePermission(...)` cùng JwtGuard/RolesGuard.
  - Đảm bảo PostgreSQL Audit Trail cho tất cả các giao dịch ghi DB thông qua `this.prisma.withActor(...)`.
  - Định dạng mã nguồn theo chuẩn Prettier và kiểm tra ESLint (`npm run lint` -> **0 lỗi**).
  - Thực thi script kiểm thử tích hợp tự động (`test_be21_be29.js`), xác nhận tất cả 9 API phản hồi HTTP `200 OK` / `201 Created` thành công và khớp 100% các trigger PostgreSQL (`wms_reservation_balance`, `wms_ledger_balance`, `inventory_quantities_valid`).
  - Đã thực hiện `git add .` và `git commit` gọn gàng trên nhánh local `feature/outbound-and-returns-be21-be29`.

### 2. Kế hoạch tiếp theo

- Đẩy nhánh `feature/outbound-and-returns-be21-be29` lên remote repository và tạo Pull Request (PR) gửi team review.
- Chuẩn bị triển khai các module tiếp theo: Báo cáo Kiểm kê tồn kho (Stock Take Audit), Điều chỉnh tồn kho (Adjustment Ledger) và Dashboard Analytics.
