+++
title = "Ngày 01 (Tuần 5) - 12/10/2026"
weight = 1
+++

## Báo cáo công việc chi tiết: Tuần 5 - Ngày 1

Hôm nay mình làm việc Remote (từ xa). Trọng tâm công việc trong ngày là thực hiện kiểm thử thực địa tích hợp End-to-End toàn diện (Live Walkthrough) theo Kịch bản vàng (Golden Scenario) của Team Lead Khoan Tạ (`MINI-WMS-DEMO-SAMPLE-DATA.docx`, `MINI-WMS-UI-DEMO-GUIDE.docx`), chuẩn bị chu đáo cho buổi bảo vệ đồ án trước Deadline Thứ Ba 12:00. Đồng thời phát hiện, xử lý các lỗi nghẽn hệ thống và hoàn thiện Báo cáo Đánh giá Trải nghiệm Người dùng (UI/UX Audit Report) gửi team Frontend.

### 1. Các hạng mục đã hoàn thành

- **Thiết lập Môi trường Kiểm thử Độc lập & Chuẩn hóa Dữ liệu Seed:**
  - Khởi chạy cơ sở dữ liệu PostgreSQL cục bộ qua Docker (`mini-wms-db` trên cổng 5432) để phục vụ kiểm thử an toàn, không ảnh hưởng đến dữ liệu chung.
  - Bảo toàn chuỗi kết nối Neon DB trên Cloud trong `.env` cho cả nhóm.
  - Đồng bộ cấu trúc bảng thông qua `npx prisma db push` và nạp thành công bộ dữ liệu seed mẫu cho buổi demo (`npm run seed:demo`).
  - Khởi chạy đồng thời Backend NestJS (cổng 3069) và Frontend Next.js (cổng 3000).

- **Khắc phục Lỗi Blocker Ánh xạ Phân quyền Frontend (`warehouse_fe/constants/auth.ts`):**
  - **Phát hiện:** Khi đăng nhập bằng các tài khoản demo chuẩn (`demo.picker`, `demo.packer`, `demo.qc`, `demo.manager`), giao diện nhận diện người dùng là `VIEWER` ("Tài khoản chỉ xem"), vô hiệu hóa hoàn toàn quyền thao tác soạn hàng, đóng gói và phê duyệt.
  - **Nguyên nhân:** File `warehouse_fe/constants/auth.ts` chỉ ánh xạ các mã vai trò không có tiền tố (`PICKER`, `PACKER`...) mà bỏ quên tiền tố `DEMO_` trong dữ liệu seed (`DEMO_PICKER`, `DEMO_PACKER`...).
  - **Xử lý:** Bổ sung đầy đủ các mã vai trò `DEMO_*` vào mảng `ROLE_MAP`, khôi phục trọn vẹn quyền hạn thao tác cho từng vai trò trên giao diện.

- **Vượt qua Ràng buộc Khóa Vị trí & Quy tắc Chống Gian lận (Maker-Checker):**
  - **Xử lý Xung đột Ô kệ (Location Collision Lock):** Giải phóng thành công khóa kiểm kê/soạn hàng tại ô kệ `A01` bằng cách hoàn thành nhiệm vụ soạn 12 kg còn tồn trên đơn seed cũ (`DEMO-20261012-SO-PICKING`).
  - **Tuân thủ Cơ chế Maker-Checker:** Tuân thủ quy tắc an toàn kho không cho phép người soạn tự phê duyệt lệnh phân công của chính mình; sử dụng tài khoản Quản lý kho (`demo.manager@mini-wms.test`) để phê duyệt độc lập lệnh soạn cho đơn demo.

- **Kiểm thử Thực địa 3 Luồng Vận hành Cốt lõi (Golden Scenario):**
  - **Luồng 1 (Nhập hàng & Cất kệ):**
    - Xác nhận phiếu tiếp nhận nhập hàng `GRN-20261012-E2A60819` với 100 kg Cà chua Đà Lạt (`DEMO-TOMATO`) tại sàn nhận `RECV-01`.
    - Tạo và hoàn tất lệnh cất kệ `PA-DEMO-01`, đưa 100 kg từ `RECV-01` vào vị trí lưu trữ `STORAGE`.
  - **Luồng 2 (Tạo đơn xuất, Lấy hàng, Cân thực tế, Đóng gói & Giao hàng):**
    - Tạo đơn hàng xuất kho `SO-DEMO-01` với số lượng 40 kg `DEMO-TOMATO`.
    - Cấp phát tồn kho tự động theo FEFO và tạo lệnh nhặt hàng.
    - Đăng nhập tài khoản `demo.picker` nhặt đủ 40 kg chuyển về khu tập kết chờ xuất `STAGING-01`.
    - Ghi nhận trọng lượng thực tế nông sản (Catch-weight 40 kg) chuẩn xác.
    - Đăng nhập tài khoản `demo.packer` tạo kiện hàng `PK-DEMO-01`, xác nhận đóng gói và chuyển trạng thái đơn hàng sang `SHIPPED`.
    - Xác minh số lượng tồn kho giảm chuẩn xác từ 100 kg xuống 60 kg.
  - **Luồng 3 (Tiếp nhận Hàng trả lại):**
    - Tạo phiếu trả hàng cho 5 kg `DEMO-TOMATO` từ đơn đã giao `SO-DEMO-01` vào ô kiểm định `QC-01`.

- **Biên soạn & Cập nhật Toàn diện Báo cáo Đánh giá UI/UX (`UI_UX_WAREHOUSE_AUDIT_REPORT.md`):**
  - Tổng hợp 7 điểm đau (pain points) và lỗi UX nghiêm trọng phát hiện trong quá trình thao tác thực tế:
    1. Lỗi thiếu role `DEMO_*` trong auth constants.
    2. Thanh Stepper tiến trình (`OutboundProgressStepper`) không bấm được, gây cảm giác đơ giao diện.
    3. Hộp cảnh báo Cân thực tế (Catch-weight) trên tab Đóng gói bị ngắt kết nối với Form nhập (form lại nằm giấu ở đáy tab Phân bổ).
    4. Thiếu chỉ dẫn và tự động chọn ô kệ đích khi tạo phiếu Trả hàng.
    5. Cảnh báo khóa ô kệ (Location lock) thiếu ngữ cảnh giải thích thân thiện.
    6. Chặn người soạn tự duyệt phân công thiếu thông báo giải thích cơ chế Maker-Checker.
    7. Placeholder thanh tìm kiếm bị dán nhầm nhãn (*"Tìm mã phiếu cất hàng..."* trong màn hình lấy hàng).
  - Định vị chính xác từng file và dòng code Frontend liên quan.
  - Cung cấp giải pháp Quick Win kèm code mẫu có thể copy-paste sửa ngay.
  - Lập bảng checklist ưu tiên P0 (sửa trước demo Thứ Ba), P1 và P2 gửi team Frontend và Team Lead Khoan Tạ.

### 2. Kế hoạch tiếp theo

- Hỗ trợ team Frontend tích hợp các bản sửa lỗi P0 theo báo cáo audit.
- Tiếp tục thực hiện các công đoạn cuối của Kịch bản vàng: Phân loại QC (3 kg Bán lại, 2 kg Lỗi) $\rightarrow$ Hủy hàng hỏng (1 kg) $\rightarrow$ Kiểm kê kho lệch (-2 kg) $\rightarrow$ Điều chuyển nội bộ (5 kg) $\rightarrow$ Xuất Báo cáo Thẻ kho đối soát chốt đúng 62 kg.
- Tổng duyệt kịch bản thuyết trình và sẵn sàng cho buổi bảo vệ đồ án kết thúc PEEP.
