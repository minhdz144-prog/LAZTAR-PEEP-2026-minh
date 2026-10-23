+++
title = "Ngày 04 (Tuần 6) - 23/10/2026"
weight = 4
+++

## Báo cáo công việc chi tiết: Tuần 6 - Ngày 4

Hôm nay mình làm việc Onsite (tại văn phòng công ty). Đây là ngày cột mốc quan trọng nhất khép lại toàn bộ hành trình 6 tuần học việc của chương trình **Product Engineering Experience Program (PEEP 2026)** tại Công ty TNHH LAZTAR: **Tham gia Buổi Đánh Giá & Phỏng Vấn Tổng Kết Cuối Cùng (Final PEEP Evaluation & Review Session)** cùng Mentor và Ban Quản lý, chính thức nhận kết quả xét duyệt chuyển tiếp lên vị trí **Software Engineer Intern**.

---

### 1. Các hạng mục đã hoàn thành

- **Tham gia Phiên Đánh Giá & Phỏng Vấn 1-1 Tổng Kết Cuối Cùng:**
  - Trực tiếp báo cáo, giải trình và bảo vệ toàn bộ hành trình học việc 6 tuần (từ ngày 15/09 đến 23/10/2026) trước anh Mentor Huy Nguyễn và Team Lead Khoan Tạ.
  - Đối chiếu minh bạch giữa **Phiếu Tự Đánh Giá Học Việc** cá nhân (`Phieu_Tu_Danh_Gia_Peep_GiangVanMinh.xlsx` với điểm tự chấm vững vàng `3.93 / 5.0` ~ `78.6 / 100 điểm`) và **Bảng Phân Công & Đóng Góp Kỹ Thuật Dự Án Mini-WMS** đã được thống nhất.
  - Báo cáo và làm rõ các đóng góp kỹ thuật cốt lõi trong suốt dự án:
    - **Nền móng Kiến trúc Backend:** Dựng toàn bộ khung sườn NestJS, kết nối CSDL PostgreSQL qua Prisma ORM, khởi tạo 20 bảng cơ sở dữ liệu ban đầu, cấu hình Swagger UI (`/api-docs`) phục vụ tra cứu API tập trung.
    - **Hệ thống Master Data & Service dùng chung:** Thiết kế trọn bộ API Master Data và xây dựng `UomConversionService` (quy đổi đa đơn vị tính nông sản chuẩn xác) cùng hàm polyfill xử lý BigInt JSON trong `main.ts`.
    - **Chuỗi Nghiệp vụ Kho Vận Phức Tạp:** Hiện thực hóa các API Nhập kho Inbound, Cất hàng Putaway, Điều chuyển Transfer, Xuất kho Outbound (thuật toán cấp phát FEFO, cơ chế giữ chỗ tồn kho Stock Reservation chống âm kho, cân Catch Weight) và phân hệ Trả hàng & Thẩm định QC.
    - **Đóng góp Kiểm thử Thực địa & UI/UX:** Chủ động xây dựng Báo cáo Thẩm định UI/UX toàn diện (`UI_UX_WAREHOUSE_AUDIT_REPORT.md` với 27 ảnh thực tế), bắt 3 lỗi P0 Blocker của Frontend và đề xuất giải pháp máy trạng thái **Outbound Next Action** được merge trực tiếp vào nhánh chính `PEEP1` (**commit `840076e`**).

- **Thành Thật Trình Bày Bài Học Kinh Nghiệm & Thái Độ Trưởng Thành:**
  - Cởi mở chia sẻ bài học đắt giá về việc quản lý và kiểm thử dữ liệu thực tế trên cơ sở dữ liệu: Sau đợt được Team Lead Khoan Tạ nhắc nhở rà soát về ranh giới giữa dữ liệu mẫu (seed/mock) và dữ liệu động, bản thân đã nghiêm túc tự kiểm tra lại toàn bộ Controller/Service, sử dụng đa kênh công cụ (Swagger UI, Postman, Prisma Studio, scratch test scripts) để đảm bảo 100% dữ liệu nghiệp vụ đọc/ghi bất biến xuống PostgreSQL.
  - Thể hiện rõ tinh thần: **Dám nhận lỗi, trung thực kỹ thuật, không tự ái và luôn hành động đến cùng để tạo ra giá trị thực chất**.

- **Nhận Đánh Giá Tổng Kết & Kết Quả Chuyển Tiếp lên Vị Trí Intern:**
  - Nhận được phản hồi và đánh giá tích cực từ anh Mentor Huy Nguyễn và Team Lead Khoan Tạ:
    - Ghi nhận sự bứt phá và tiến bộ vượt bậc sau 6 tuần: Từ một sinh viên ban đầu còn bỡ ngỡ với các lệnh Git, cấu hình Docker và framework NestJS, nay đã tự chủ động phân tích và giải quyết các bài toán kiến trúc kho vận phức tạp.
    - Đánh giá cao tư duy kỹ thuật bền vững (tôn trọng nguyên tắc thẻ kho đối ứng bất biến, Append-Only), kỹ năng làm việc nhóm hòa nhã và tư duy sản phẩm hướng tới người dùng thực tế.
    - **KẾT QUẢ:** **Chính thức đạt yêu cầu xuất sắc kết thúc giai đoạn học việc PEEP 2026, nhận đề xuất chuyển tiếp lên vị trí Software Engineer Intern tại LAZTAR!**

- **Thống Nhất Mục Tiêu Kỹ Thuật Cho Giai Đoạn Internship (3 Tháng Tới):**
  - Đạt chuẩn Test Coverage tối thiểu 80% cho mọi module Backend phụ trách.
  - Nghiên cứu sâu về Tối ưu hóa Database (Indexing, Query Performance, Execution Plan) và Concurrency Control (Pessimistic/Optimistic Lock nâng cao).
  - Trau dồi tư duy Clean Architecture, Design Patterns và tham gia phát triển các dự án sản phẩm thương mại thực tế của công ty.

- **Đóng Gói Dự Án & Hoàn Thiện Nhật Ký Thực Tập Toàn Bộ 6 Tuần:**
  - Rà soát mã nguồn lần cuối, dọn dẹp các branch tạm thời, cập nhật đầy đủ nhật ký các ngày trong Tuần 06 vào website tài liệu cá nhân `LAZTAR-PEEP-2026-minh`.
  - Chính thức khép lại 6 tuần học việc PEEP 2026 đầy tự hào và sẵn sàng bước sang chặng đường Internship mới!

---

### 2. Kế hoạch tiếp theo

- Hoàn tất các thủ tục tiếp nhận và chuẩn bị tâm thế bước vào giai đoạn Internship chính thức tại LAZTAR.
- Bắt đầu kế hoạch tự học chuyên sâu về Database Indexing, Query Optimization và kiến trúc microservices/distributed systems.
- Tiếp tục duy trì thói quen viết nhật ký kỹ thuật hằng ngày, tinh thần kỷ luật và ngọn lửa đam mê với nghề kỹ sư phần mềm.
