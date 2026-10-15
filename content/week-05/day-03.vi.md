+++
title = "Ngày 03 (Tuần 5) - 14/10/2026"
weight = 3
+++

## Báo cáo công việc chi tiết: Tuần 5 - Ngày 3

Hôm nay mình làm việc Onsite (tại văn phòng). Trọng tâm công việc trong ngày là pull và tích hợp nhánh mới nhất `feat/PEEP1-FE15-return` (Pull Request #94), thiết lập kịch bản kiểm thử tự động toàn diện qua Playwright trên trình duyệt Microsoft Edge, đóng vai Thủ kho thực địa kiêm Chuyên gia Thẩm định UI/UX để rà soát toàn diện 8 luồng vận hành trên cả Desktop PC (1440x900) và Mobile Responsive (390x844), tìm ra các lỗi P0 Blocker chí tử và hoàn thiện Báo cáo Kiểm định UI/UX (`UI_UX_WAREHOUSE_AUDIT_REPORT.md`) cùng 34 ảnh chụp minh chứng thực tế.

### 1. Các hạng mục đã hoàn thành

- **Pull & Tích hợp Nhánh Mới Nhất `feat/PEEP1-FE15-return` (Pull Request #94):**
  - Kéo toàn bộ mã nguồn mới nhất từ remote `origin/feat/PEEP1-FE15-return` (commits `4edeb3b`, `20c3b1f`, `56e7dfa`).
  - Nhánh này tích hợp các phân hệ quan trọng: Phân hệ Tiếp nhận & Thẩm định Hàng trả lại (`/admin/returns`), điều chỉnh tồn kho tức thì, xử lý số lượng lớn BigInt, cây cấu trúc vị trí kho tương tác (`location-tree-section.tsx`), xuất dữ liệu báo cáo CSV.
  - Đồng bộ lại schema cơ sở dữ liệu (`npx prisma db push`), nạp dữ liệu seed demo Run ID `20261014`, khởi chạy cả Backend NestJS (cổng 3069) và Frontend Next.js (cổng 3000).

- **Xây dựng Kịch bản Kiểm thử Tự động Hóa Trình duyệt (Playwright Automation):**
  - Viết kịch bản tự động hóa Playwright (`scratch/run_full_scenario_audit.js`) điều khiển trình duyệt Microsoft Edge Headless thực hiện tuần tự và độc lập trên 2 môi trường:
    1. **Desktop PC (1440x900):** Mô phỏng màn hình điều phối của Thủ kho tại bàn cân.
    2. **Mobile Responsive (390x844):** Mô phỏng nhân viên vừa đẩy xe hàng vừa cầm điện thoại thao tác 1 tay giữa các dãy kệ kho.
  - Tự động đi qua trọn vẹn 8 luồng vận hành: Đăng nhập & Dashboard $\rightarrow$ Nhập hàng $\rightarrow$ Cất kệ $\rightarrow$ Tạo đơn xuất $\rightarrow$ Soạn hàng $\rightarrow$ Đóng gói & Cân thực tế $\rightarrow$ Kiểm kê kho $\rightarrow$ Trả hàng & QC $\rightarrow$ Thẻ kho & Ma trận vị trí.

- **Mổ xẻ Nguyên nhân & Đưa ra Giải pháp cho 2 Lỗi P0 Blocker Chí mạng:**
  - **Lỗi 1 (P0 - Blocker Toàn diện): Toast đỏ `Request scope changed` và Bảng dữ liệu trắng tinh khi vừa đăng nhập:**
    - *Hiện tượng:* Vừa đăng nhập tài khoản vào, mở bất kỳ trang danh sách nào lên là lập tức nhảy ra banner đỏ: `Request scope changed`, bảng danh sách đơn hàng trống trơn hiển thị *"0 kết quả"* và nút *"Thử lại"*.
    - *Nguyên nhân kỹ thuật:* Khi đăng nhập (`setSession`), state `workingWarehouseKey` trong `warehouse_fe/stores/auth.store.ts` bị khởi tạo là `null`. Dù Context `session-context.tsx` tự động gán kho mặc định là `warehouses[0].key` (`warehouse:1`), nhưng Context không hề lưu giá trị này ngược lại vào Zustand Store. Khi gọi API, interceptor Axios trong `api-client.ts` kiểm tra `workingWarehouseKey !== scope.warehouseKey` (`null !== 'warehouse:1'`), lập tức hủy (cancel) toàn bộ request tải dữ liệu và ném lỗi `Request scope changed`.
    - *Giải pháp triệt để:* Thêm một `useEffect` tự động đồng bộ kho làm việc vào Zustand Store trong `session-context.tsx`.
  - **Lỗi 2 (P0 - Blocker Mobile): Nút Avatar tròn đè chết nút "Tổng quan" trên thanh điều hướng đáy:**
    - *Hiện tượng:* Trên màn hình điện thoại 390px, nút avatar người dùng hình tròn bị ghim cố định (`fixed bottom-4 left-4`), nằm đè trực tiếp lên icon "Tổng quan" của thanh Bottom Navigation Bar, khiến thủ kho không thể bấm về trang chủ.
    - *Giải pháp:* Ẩn nút avatar cố định ở góc dưới đáy trên màn hình mobile (`hidden md:block`), chuyển thông tin tài khoản lên Header.
  - **Lỗi 3 (P0 - Đứt gãy luồng): Cảnh báo Cân thực tế (Catch-weight) bị ngắt kết nối với Form nhập:**
    - *Hiện tượng:* Tab Đóng gói hiện cảnh báo vàng *"Cần xác nhận cân thực tế..."* và ẩn nút tạo kiện, nhưng tại tab Đóng gói không hề có ô nào để nhập cân (ô nhập cân bị giấu ở đáy tab Phân bổ).
    - *Giải pháp:* Gắn trực tiếp nút `[ 👉 Đến nhập cân thực tế ngay ]` trong hộp cảnh báo vàng để chuyển tab và cuộn thẳng tới ô nhập cân.

- **Thu thập 34 Ảnh Minh chứng Thực tế & Dọn dẹp Thư mục Dữ liệu:**
  - Chụp 34 bức ảnh chụp màn hình độ phân giải cao ghi nhận chính xác từng bước và từng lỗi phát hiện (17 ảnh Desktop `d_00` $\rightarrow$ `d_16` và 17 ảnh Mobile `m_00` $\rightarrow$ `m_16`).
  - Chạy script dọn dẹp sạch sẽ 81 file ảnh rác/ảnh cũ trong thư mục Brain của Gemini, chỉ giữ lại đúng 34 bức ảnh thật của đợt test.
  - Sao chép toàn bộ 34 ảnh sang thư mục dự án `warehouse_be/docs/audit-screenshots/` để team dễ dàng nén ZIP hoặc chia sẻ.

- **Biên soạn & Tối ưu hóa Toàn diện Báo cáo Thẩm định UI/UX (`UI_UX_WAREHOUSE_AUDIT_REPORT.md`):**
  - Viết mới toàn diện tài liệu báo cáo với cấu trúc rõ ràng, chuyên nghiệp:
    1. Bảng Checklist hành động nhanh (Quick Action List) phân loại P0, P1, P2 kèm thời gian ước tính sửa (10-20 phút/task).
    2. Thẻ mô tả lỗi chuẩn hóa (Standard Issue Cards): Mức độ, Thiết bị, Hiện tượng, Nguyên nhân, File cần sửa, Cách sửa, Bằng chứng ảnh.
    3. Đoạn mã code mẫu hoàn chỉnh (Copy-paste ready) cho team Frontend.
    4. Bảng tra cứu 34 file ảnh minh chứng rõ ràng.

### 2. Kế hoạch tiếp theo

- Tiếp tục làm việc Onsite vào ngày mai (Thứ Năm, 15/10/2026).
- Họp bàn giao trực tiếp báo cáo kiểm thử và ảnh chụp cho team Frontend để tiến hành fix nhanh 2 lỗi P0 và các lỗi P1.
- Hỗ trợ Frontend kiểm thử bản vá và đối soát số liệu phân hệ Trả hàng / Thẻ kho.
