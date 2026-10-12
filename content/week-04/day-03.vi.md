+++
title = "Ngày 03 (Tuần 4) - 07/10/2026"
weight = 3
+++

## Báo cáo công việc chi tiết: Tuần 4 - Ngày 3

Hôm nay mình làm việc Remote (từ xa). Trọng tâm công việc trong ngày là nghiên cứu, đánh giá toàn diện tính sẵn sàng của hệ thống Backend (Backend Readiness Audit) phục vụ 8 màn hình giao diện quan trọng của phân hệ Xuất hàng, Tiếp nhận hàng trả, Đợt kiểm kê và Báo cáo trực quan theo tài liệu `BACKEND_READINESS_RECHECK_2026-10-07.md`. Đồng thời phối hợp rà soát tính toàn vẹn của logic nghiệp vụ kiểm soát tồn kho và cơ chế khóa vị trí.

### 1. Các hạng mục đã hoàn thành

- **Đánh giá tính sẵn sàng của Backend (Backend Readiness Audit):**
  - Rà soát toàn bộ các route và controller thuộc phân hệ Xuất hàng (`/api/outbound`), Tiếp nhận hàng trả (`/api/outbound/returns`), Kiểm kê kho (`/api/cycle-counts`) và Báo cáo (`/api/reports`).
  - Đối chiếu chi tiết khả năng đáp ứng của Backend hiện tại với 8 màn hình Frontend đã thiết kế:
    1. Màn hình Tạo đơn hàng xuất kho (Sales Order Form).
    2. Màn hình Phân bổ FEFO và Giữ hàng tồn kho (Allocation & Reservation).
    3. Màn hình Xử lý thiếu hàng (Short ship, Đổi hàng, Giao bù).
    4. Màn hình Tiến độ lấy hàng (Picking) và Đóng gói (Packing).
    5. Màn hình Tiếp nhận hàng trả và Biên bản kiểm tra (Customer Returns & QC Inspection).
    6. Màn hình Đợt kiểm kê và Phiếu chênh lệch (Cycle Count & Variance).
    7. Màn hình Ma trận tồn kho theo ô kệ/lô (Visual Inventory Matrix).
    8. Màn hình Dashboard Cảnh báo hạn dùng và Thẻ kho (Stock Ledger History).

- **Thẩm định & Tái xác nhận phạm vi nghiệp vụ Task BE-29 (Tiếp nhận hàng trả & Phân loại QC):**
  - Phân tích sâu luồng nghiệp vụ Tiếp nhận hàng trả và Phân loại theo 3 nhánh xử lý: `RESTOCK` (Bán lại), `DAMAGED` (Hàng lỗi) và `QC_PENDING` (Chờ kiểm tra).
  - Chỉ ra các điểm cần siết chặt về mặt ràng buộc dữ liệu:
    - Bắt buộc kiểm tra ô `BIN` đích phải đang hoạt động (`is_active = true`), thuộc kho của đơn hàng và có mục đích (`purpose`) khớp với trạng thái phân loại (`RESTOCK` đưa về `STORAGE`, `DAMAGED` đưa về `DAMAGED`, `QC_PENDING` đưa về `QC`).
    - Ngăn chặn triệt để rủi ro hàng lỗi hoặc hàng chờ QC bị nhập nhầm vào ô lưu trữ pickable khiến thuật toán FEFO phân bổ cho các đơn hàng xuất tiếp theo.
  - Phân tích giải pháp chống nhận trùng phiếu (Idempotency) bằng mã phiếu duy nhất (`returnNo` / `requestKey`) và kiểm tra phiên bản tồn kho thống nhất qua `InventoryLedgerService`.

- **Phối hợp Rà soát Logic Khóa Vị Trí (Location Lock Enforcement):**
  - Đánh giá cơ chế khóa vị trí kiểm kê đối với các nghiệp vụ xuất nhập kho: khi một ô kệ đang trong tiến trình kiểm kê (`IN_PROGRESS`), toàn bộ thao tác lấy hàng (Picking), cất hàng (Putaway) hoặc xuất hàng (Ship) tại ô đó phải được kiểm soát chặt chẽ để tránh sai lệch số liệu tồn kho sổ sách.
  - Phối hợp xác thực các ràng buộc phân quyền Role-Based Access Control (RBAC) trên các endpoint quản lý kho.

- **Biên soạn Báo cáo Kỹ thuật:**
  - Hoàn thiện tài liệu kỹ thuật `docs/BACKEND_READINESS_RECHECK_2026-10-07.md` để bàn giao và phản hồi cho Team Lead cùng team Frontend làm cơ sở phối hợp phát triển.

### 2. Kế hoạch tiếp theo

- Bắt tay vào thiết kế và triển khai Hệ thống Ghi nhật ký Kiểm toán API (API Audit Logging System) để bảo vệ an ninh và lưu vết toàn bộ hoạt động của hệ thống.
- Chuẩn bị cơ chế che chắn dữ liệu nhạy cảm (Sanitization) và API truy xuất audit log.
