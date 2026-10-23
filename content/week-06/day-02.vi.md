+++
title = "Ngày 02 (Tuần 6) - 20/10/2026"
weight = 2
+++

## Báo cáo công việc chi tiết: Tuần 6 - Ngày 2

Hôm nay mình làm việc Remote (từ xa). Trọng tâm công việc trong ngày là tiếp tục tinh chỉnh và hoàn thiện chi tiết toàn bộ các tiêu chí và minh chứng kỹ thuật trong Phiếu Tự Đánh Giá Học Việc cá nhân (`Phieu_Tu_Danh_Gia_Peep_Giang_Van_Minh.xlsx`), đồng thời nghiên cứu sâu các cơ chế nâng cao của Git Flow và rà soát các bài toán tối ưu hóa Backend sau buổi demo ngày 19/10.

---

### 1. Các hạng mục đã hoàn thành

- **Rà soát & Hoàn thiện Minh chứng Kỹ thuật trong Phiếu Tự Đánh Giá:**
  - Căn cứ vào phản hồi sơ bộ từ buổi demo ngày 19/10 và phân công công việc thực tế, tiến hành đối chiếu từng tiêu chí tự đánh giá với các bằng chứng thực tế trong codebase:
    - **Công cụ kiểm thử độc lập:** Xác thực lại các dẫn chứng về việc sử dụng đa kênh công cụ gồm **Swagger UI** (`/api-docs`), **Postman**, **Prisma Studio** và các **script kiểm thử tự động độc lập (scratch scripts)** trực tiếp truy vấn cơ sở dữ liệu PostgreSQL để kiểm tra tính toàn vẹn số liệu.
    - **Kiến trúc dịch vụ dùng chung:** Chuẩn hóa minh chứng về việc chủ động thiết kế `UomConversionService` quy đổi đa đơn vị tính nông sản tập trung và hàm polyfill xử lý BigInt JSON trong `main.ts`.
    - **Tinh thần cầu thị và khiêm tốn:** Tinh chỉnh các câu từ nhận xét ở tiêu chí chất lượng và hình ảnh chuyên nghiệp (chấm mức điểm 3 - 4 vững vàng), thành thật phản ánh bài học kinh nghiệm từ đợt rà soát dữ liệu mẫu (seed/mock) cùng Team Lead Khoan Tạ và nêu rõ giải pháp khắc phục bằng việc đối soát dữ liệu thật.
  - Hoàn thiện câu trả lời cho 6 câu hỏi Phần 8 (Tự nhận xét & Định hướng), tập trung vào mục tiêu 3 tháng tới khi lên vị trí Intern chính thức: nâng cao kỹ năng thiết kế hệ thống (System Design), đạt chuẩn test coverage > 80% và tối ưu truy vấn Database.

- **Nghiên cứu Kỹ thuật Vận hành Git Flow & Cơ chế Duyệt Pull Request Nâng cao:**
  - Tìm hiểu cơ chế cộng tác trên GitHub trong môi trường doanh nghiệp:
    - Cơ chế **"Allow edits by maintainers"**: Hiểu rõ cách Tech Lead/Maintainer có thể checkout nhánh PR về máy cục bộ, sửa lỗi hoặc kéo nhánh chính mới nhất vào để giải quyết xung đột (conflict) rồi push ngược lại lên nhánh PR của thành viên.
    - Phân biệt rõ sự khác nhau giữa hành động kéo code nhánh chính vào nhánh tính năng (`Merge branch 'PEEP1' into feature/...`) và hành động chốt hạ hợp nhất tính năng vào nhánh chính (`merged commit into PEEP1`).
    - Nắm vững quy trình xử lý xung đột (merge conflicts) mà không làm mất lịch sử commit của các thành viên.

- **Rà soát Kỹ thuật Sau Demo & Chuẩn bị Báo cáo Đóng góp:**
  - Rà soát các câu hỏi kỹ thuật từ Mentor trong buổi demo ngày 19/10, đặc biệt là các khía cạnh:
    - Ràng buộc thẻ kho đối ứng nguyên tử bất biến (`stock_ledger` Append-Only).
    - Cơ chế chống Race Condition khi nhiều nhân viên cùng giữ chỗ tồn kho (Stock Reservation) trong giờ cao điểm.
    - Quy trình phân loại hàng trả lại tại ô kiểm định `QC-01` đưa về kệ lưu trữ `STORAGE` hoặc ô phế phẩm `DAMAGED-01`.
  - Tổng hợp danh mục các task Backend chủ trì và các đóng góp chéo (báo cáo kiểm toán UI/UX, đề xuất Outbound Next Action) sẵn sàng cho phiên làm việc Onsite vào ngày mai.

---

### 2. Kế hoạch tiếp theo

- Lên văn phòng làm việc Onsite vào ngày mai (Thứ Tư, 21/10/2026).
- Cùng Team Lead Khoan Tạ và nhóm rà soát bảng tổng hợp phân công và tỷ lệ đóng góp kỹ thuật của cả nhóm.
- Nộp bản chính thức Phiếu Tự Đánh Giá Học Việc cho anh Mentor Huy Nguyễn.
