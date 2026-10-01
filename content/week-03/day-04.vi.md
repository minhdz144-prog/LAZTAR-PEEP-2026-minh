+++
title = "Ngày 04 (Tuần 3) - 01/10/2026"
weight = 4
+++

## Báo cáo công việc chi tiết: Tuần 3 - Ngày 4

Hôm nay mình làm việc Remote (từ xa). Trọng tâm công việc trong ngày là phát triển toàn bộ 4 bộ API Master Data Backend (Domain B & C) theo phân công trong `docs/MiniWMS Task.xlsx`, xử lý triệt để các ràng buộc trigger và audit log cơ sở dữ liệu PostgreSQL, gắn decorator phân quyền chuẩn permission, chuẩn hóa 100% định dạng dữ liệu camelCase cho Frontend, đồng thời hoàn thành kiểm thử thành công trên môi trường NestJS dev server.

### 1. Các hạng mục đã hoàn thành

- **Đồng bộ Nhánh & Tạo Feature Branch mới:**
  - Cập nhật nhánh `PEEP1` mới nhất từ remote repository (`git pull origin PEEP1`).
  - Khởi tạo feature branch mới `feature/master-data-api` để tập trung phát triển bộ API Master Data.

- **Phát triển 4 Bộ API Master Data Backend (Domain B & C - NestJS):**
  - **Task 1: Categories & UoMs (Danh mục nông sản & Đơn vị tính):**
    - Triển khai `CategoriesController` & `CategoriesService`.
    - Endpoints: `GET /api/master-data/categories`, `POST /api/master-data/categories`, `GET /api/master-data/categories/:id`, `PUT /api/master-data/categories/:id`, `GET /api/master-data/uoms`, `POST /api/master-data/uoms`.
  - **Task 2: SKUs & Barcodes (Mã nông sản & Mã vạch):**
    - Triển khai `SkusController` & `SkusService`.
    - Endpoints: `GET /api/master-data/skus`, `POST /api/master-data/skus`, `GET /api/master-data/skus/:id`, `PUT /api/master-data/skus/:id`, `POST /api/master-data/barcodes`.
  - **Task 3: Warehouses & Location Hierarchy Tree (Nhà kho & Vị trí ô kệ):**
    - Triển khai `WarehousesController` & `WarehousesService`.
    - Endpoints: `GET /api/master-data/warehouses`, `POST /api/master-data/warehouses`, `GET /api/master-data/warehouses/:id`, `GET /api/master-data/locations`, `POST /api/master-data/locations`, `GET /api/master-data/warehouses/:id/location-tree` (trả về cấu trúc cây vị trí kho).
  - **Task 4: Suppliers & SKU-Supplier Mappings (Nhà cung cấp & Liên kết nông sản):**
    - Triển khai `SuppliersController` & `SuppliersService`.
    - Endpoints: `GET /api/master-data/suppliers`, `POST /api/master-data/suppliers`, `GET /api/master-data/suppliers/:id`, `POST /api/master-data/sku-suppliers`.

- **Chuẩn hóa camelCase & Xử lý Triggers Cơ sở dữ liệu:**
  - Viết module helper `mapper.helper.ts` chuyển đổi toàn bộ dữ liệu trả về từ DB `snake_case` sang `camelCase` chuẩn hóa 100% cho Frontend.
  - Xử lý PostgreSQL Audit Trigger: Bọc tất cả thao tác tạo/sửa trong `this.prisma.withActor(actorId, ...)` để truyền biến phiên `app.actor_user_id`.
  - Xử lý Deferrable Constraint Trigger (`wms_active_sku_base_uom`): Tự động tạo bản ghi đơn vị tính cơ sở (`sku_uoms` Base) trong cùng transaction khi tạo SKU mới.

- **Cấu hình Phân quyền Permission & Kiểm thử Thành công:**
  - Cập nhật toàn bộ các Controller sử dụng decorator `@RequirePermission('[resource]:[action]')` (dạng `category:read`, `sku:create`, `warehouse:read`, `supplier:create`,...) tuân thủ tuyệt đối quy định phân quyền của team.
  - Viết script kiểm thử tự động gửi HTTP Request thực tế đến server `http://localhost:3069`, tất cả endpoint trả về mã mã phản hồi **200 OK / 201 Created** sạch sẽ.
  - Biên dịch dự án qua `npm run build` đạt **0 lỗi TypeScript**.
  - Commit toàn bộ thay đổi local trên nhánh `feature/master-data-api`, sẵn sàng tạo Pull Request ghép vào nhánh chính `PEEP1`.

### 2. Kế hoạch tiếp theo

- Đẩy nhánh `feature/master-data-api` lên GitHub và tạo Pull Request (PR) xin phép merge vào `PEEP1`.
- Phối hợp với team xem xét review code và tích hợp các module nhập xuất kho tiếp theo.
