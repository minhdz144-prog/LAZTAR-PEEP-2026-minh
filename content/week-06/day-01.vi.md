+++
title = "Ngày 01 (Tuần 6) - 19/10/2026"
weight = 1
+++

## Báo cáo công việc chi tiết: Tuần 6 - Ngày 1

Hôm nay mình làm việc Onsite (tại văn phòng công ty). Đây là ngày cột mốc đặc biệt quan trọng trong toàn bộ hành trình thực tập: **Tham gia buổi Báo cáo & Demo Milestone Đồ án Mini-WMS bảo vệ kết quả 6 tuần học việc chương trình PEEP 2026**, đồng thời tiếp nhận, thực hiện và hoàn thiện **Phiếu Tự Đánh Giá Học Việc xét duyệt chuyển tiếp lên vị trí Software Engineer Intern**.

---

### 1. Các hạng mục đã hoàn thành

- **Bảo vệ Đồ án & Demo Thực tế Hệ thống Mini-WMS trước Mentor & Team Lead:**
  - Tham gia phiên báo cáo và bảo vệ đồ án cùng nhóm trước anh Mentor Huy Nguyễn và Team Lead Khoan Tạ.
  - Trực tiếp báo cáo, giải trình kiến trúc kỹ thuật và demo thực tế các phân hệ Backend cốt lõi do mình chịu trách nhiệm chính:
    - **Hệ thống Master Data & Service quy đổi đơn vị tính tập trung:** Trình diễn các API quản lý SKU, Barcode, Vị trí ô kệ BIN và đặc biệt là `UomConversionService` (Task `BE-09` đến `BE-12b`) tự động nhân hệ số quy đổi về đơn vị chuẩn khi nhập/xuất kho.
    - **Luồng Nhập kho Inbound & Cất hàng:** Demo quy trình tiếp nhận phiếu nhập hàng (GRN), kiểm tra mã Lô/HSD và ghi nhận cặp giao dịch đối ứng `PUTAWAY_OUT` / `PUTAWAY_IN` vào thẻ kho.
    - **Luồng Xuất kho Outbound Phức tạp:** Demo thuật toán **Tự động cấp phát tồn theo FEFO** (`outbound_allocations`), **Cơ chế giữ chỗ tồn kho (Stock Reservation)** chi tiết chống âm kho, điều phối lệnh lấy hàng Pick Task theo lộ trình tối ưu và ghi nhận cân thực tế Catch Weight lúc đóng gói (Task `BE-21` đến `BE-28`).
    - **Phân hệ Trả hàng & Thẩm định QC:** Trình diễn luồng tiếp nhận hàng trả lại, phân loại thẩm định chất lượng tại ô `QC-01`, đưa hàng đạt chuẩn về kệ `STORAGE` (Restock) và tách hàng hỏng sang ô `DAMAGED-01` (Task `BE-29`).
  - **Chứng minh Tính Toàn vẹn Dữ liệu:** Minh chứng tính bất biến và chuẩn xác của sổ thẻ kho `stock_ledger` (Append-Only, không UPDATE/DELETE) với tổng chênh lệch toàn hệ thống luôn bảo toàn bằng 0 qua từng Database Transaction.
  - **Ghi nhận Đóng góp:** Được Mentor và Team Lead đánh giá cao về năng lực Backend, sự chủ động kiểm thử chéo và đóng góp giải pháp `Outbound Next Action` trong Báo cáo Thẩm định UI/UX (`UI_UX_WAREHOUSE_AUDIT_REPORT.md`) đã được merge vào nhánh chính `PEEP1` (commit `840076e`).

- **Hoàn thiện Phiếu Tự Đánh Giá Học Việc Xét Lên Vị Trí Intern (PEEP Self-Evaluation):**
  - Tiếp nhận biểu mẫu tự đánh giá [Phieu_Tu_Danh_Gia_Peep_Tên_Bạn.xlsx](file:///e:/PEEP2026PART2/warehouse_be/docs/Phieu_Tu_Danh_Gia_Peep_Tên_Bạn.xlsx) từ anh Mentor Huy Nguyễn.
  - Nghiêm túc rà soát toàn bộ chặng đường 6 tuần học việc (từ 15/09 đến 19/10/2026), tự chấm điểm theo 7 nhóm tiêu chí (27 tiêu chí chi tiết) và trả lời đầy đủ 6 câu hỏi định hướng phát triển trong Phần 8.
  - Đối chiếu sát sao với phân công công việc thực tế trong [MiniWMS Task.xlsx](file:///e:/PEEP2026PART2/warehouse_be/docs/MiniWMS%20Task.xlsx) để đưa ra các dẫn chứng kỹ thuật xác đáng, trung thực:
    - Nêu bật kỹ năng sử dụng công cụ kiểm thử đa kênh: **Swagger UI** (`/api-docs`), **Postman**, **Prisma Studio** và các **script kiểm thử độc lập (scratch scripts)** truy vấn trực tiếp DB.
    - Nêu bật sáng kiến xây dựng báo cáo kiểm toán UI/UX và đề xuất luồng Next Action hỗ trợ team Frontend.
  - **Thể hiện tinh thần cầu thị và khiêm tốn:** 
    - Trung thực ghi nhận bài học kinh nghiệm từ đợt Team Lead Khoan Tạ nhắc nhở rà soát về việc dữ liệu API còn lẫn dữ liệu mẫu/mock data, phản ánh đúng vào tiêu chí chất lượng và nêu rõ cách khắc phục dứt điểm bằng việc kiểm tra 100% dữ liệu thực trên PostgreSQL.
    - Điều chỉnh điểm số ở các tiêu chí mềm và hình ảnh chuyên nghiệp ở mức vừa phải, khiêm nhường (tổng điểm tự đánh giá đạt **`4.01 / 5.0`**, tương đương **`80.2 / 100 điểm`** – chuẩn mực, vững vàng và không tự cao).
  - Tinh chỉnh định dạng bảng tính trên WPS Office (bật ngắt dòng Wrap Text, căn giữa lề dọc, mở rộng cột dẫn chứng cho thoáng đẹp), lưu file chuẩn quy ước `Phieu_Tu_Danh_Gia_Peep_Giang_Van_Minh.xlsx` sẵn sàng nộp lại cho Mentor.

- **Rà soát Cập nhật Nhánh Chính `origin/PEEP1`:**
  - Kiểm tra các commit mới nhất vừa được merge vào nhánh chính `PEEP1` (commit `7739e9f` tích hợp `peep1-deploy`, `840076e` nâng cấp Outbound Next Action, cấu hình triển khai Render & Vercel CORS, chính sách thời hạn trả hàng tối đa Return Window Policy).
  - Đánh giá tổng thể hệ thống đã sẵn sàng cho giai đoạn kiểm thử nghiệm thu cuối cùng và đóng gói đồ án.

---

### 2. Kế hoạch tiếp theo

- Gửi file Phiếu Tự Đánh Giá hoàn chỉnh `Phieu_Tu_Danh_Gia_Peep_Giang_Van_Minh.xlsx` cho anh Mentor Huy Nguyễn và chuẩn bị cho buổi phỏng vấn đánh giá 1-1.
- Phối hợp cùng các thành viên trong nhóm dọn dẹp mã nguồn (code cleanup), gỡ bỏ các console log dư thừa và đóng gói tài liệu bàn giao kỹ thuật của dự án Mini-WMS.
- Tiếp tục củng cố kiến thức chuyên sâu về tối ưu hóa cơ sở dữ liệu (Database Indexing, Query Optimization) và kiến trúc hệ thống phân tán, sẵn sàng tiếp nhận các thử thách mới khi chuyển tiếp lên vị trí Intern chính thức tại LAZTAR.
