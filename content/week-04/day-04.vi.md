+++
title = "Ngày 04 (Tuần 4) - 08/10/2026"
weight = 4
+++

## Báo cáo công việc chi tiết: Tuần 4 - Ngày 4

Hôm nay mình làm việc Remote (từ xa). Trọng tâm công việc trong ngày là nghiên cứu, thiết kế và phát triển toàn diện Hệ thống Ghi nhật ký Kiểm toán Thực thi API (`API Execution Audit Logging System` - Commit `7a65b2a`, Pull Request #78) trên hệ thống Mini-WMS Backend (NestJS, Prisma ORM, PostgreSQL), bảo đảm khả năng lưu vết bất biến, phân quyền bảo mật và tự động che chắn dữ liệu nhạy cảm.

### 1. Các hạng mục đã hoàn thành

- **Thiết kế & Mô hình hóa Cơ sở dữ liệu Audit Log:**
  - Cập nhật Prisma Schema bổ sung bảng `api_audit_log` với các trường dữ liệu chi tiết: `id`, `method`, `endpoint`, `status_code`, `duration_ms`, `ip_address`, `user_id`, `request_payload`, `response_payload`, `error_message`, `created_at`.
  - Thiết lập các chỉ mục (indexes) trên `endpoint`, `status_code`, `user_id` và `created_at` để tối ưu hóa hiệu năng truy vấn lịch sử kiểm toán.

- **Phát triển Cơ chế Tự động Bắt vết API (ApiAuditLogInterceptor):**
  - Xây dựng NestJS Interceptor toàn cục `ApiAuditLogInterceptor` (`src/common/interceptors/api-audit-log.interceptor.ts`).
  - Tự động đo lường thời gian thực thi của từng request (`duration_ms`), ghi nhận mã trạng thái HTTP, địa chỉ IP nguồn và định danh người dùng từ JWT session.
  - Bỏ qua các endpoint kiểm tra trạng thái sức khỏe định kỳ (`/health`, `/healthz`) để tránh làm phình dữ liệu log không cần thiết.

- **Bảo vệ & Che chắn Dữ liệu Nhạy cảm (SanitizerHelper):**
  - Xây dựng helper xử lý dữ liệu `SanitizerHelper` (`src/common/helpers/sanitizer.helper.ts`).
  - Tự động phát hiện và che giấu (masking) các trường dữ liệu bảo mật trong cả Request Payload lẫn Response Payload: mật khẩu (`password`, `newPassword`), mã token (`accessToken`, `refreshToken`, `token`), số định danh cá nhân, thẻ ngân hàng... trước khi lưu trữ vào cơ sở dữ liệu.
  - Viết bộ Unit Test độc lập `sanitizer.helper.spec.ts` kiểm thử toàn diện các trường hợp lồng nhau (nested objects, arrays), đạt tỷ lệ bao phủ 100%.

- **Phát triển Module & API Truy xuất Lịch sử Audit Log:**
  - Xây dựng phân hệ `AuditLogModule`, `AuditLogService` và `AuditLogController` (`src/modules/modules-system/audit-log/`).
  - Triển khai endpoint `GET /api/audit-logs` phục vụ Quản trị viên tra cứu nhật ký kiểm toán.
  - Hỗ trợ bộ lọc nâng cao đa tiêu chí thông qua `QueryAuditLogDto`: lọc theo khoảng thời gian (`fromDate`, `toDate`), mã trạng thái HTTP (`statusCode`), phương thức (`method`), từ khóa URL (`endpoint`), người thực hiện (`userId`), phân trang `page` và `limit`.

- **Phân quyền Bảo mật (RBAC) & Kiểm soát Chất lượng Mã nguồn:**
  - Định nghĩa hằng số quyền hạn `PERMISSION.AUDIT_LOG.READ` trong `permission.constant.ts`.
  - Bảo vệ endpoint tra cứu bằng Guard `@RequirePermission(PERMISSION.AUDIT_LOG.READ)` ngăn chặn truy cập trái phép.
  - Định dạng toàn bộ mã nguồn theo chuẩn Prettier.
  - Thực thi toàn bộ kiểm thử tự động (`npm run test`), đảm bảo mọi test suite chạy thành công và không phát sinh lỗi hồi quy (regression).

- **Tạo Nhánh, Commit & Mở Pull Request:**
  - Hoàn tất commit: `feat(audit-log): implement API execution audit logging with sensitive data masking` (`7a65b2a`).
  - Đẩy nhánh lên Remote Repository và mở Pull Request #78 (`feature/audit-log-system`) để team tiến hành review và tích hợp vào nhánh chính `PEEP1`.

### 2. Kế hoạch tiếp theo

- Chuẩn bị bước vào tuần tiếp theo (Tuần 5) với nhiệm vụ trọng tâm: Kiểm thử tích hợp toàn diện hệ thống (End-to-End Walkthrough) và chuẩn bị cho buổi bảo vệ đồ án.
