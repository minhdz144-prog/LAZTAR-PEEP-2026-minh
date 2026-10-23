+++
title = "Ngày 03 (Tuần 6) - 21/10/2026"
weight = 3
+++

## Báo cáo công việc chi tiết: Tuần 6 - Ngày 3

Hôm nay mình làm việc Onsite (tại văn phòng công ty). Trọng tâm công việc trong ngày là tham gia phiên rà soát, đối chiếu và thống nhất Bảng phân công và tỷ lệ đóng góp kỹ thuật toàn dự án Mini-WMS (`Bảng phân công và đóng góp MiniWMS.xlsx`) cùng Team Lead Khoan Tạ và nhóm, bảo đảm tính công tâm và minh bạch về mặt số liệu kỹ thuật, đồng thời chính thức nộp Phiếu Tự Đánh Giá Học Việc cho anh Mentor Huy Nguyễn.

---

### 1. Các hạng mục đã hoàn thành

- **Rà soát & Phản biện Kỹ thuật Bảng Phân công Đóng góp Toàn Dự án:**
  - Tiếp nhận bảng phân tích đóng góp kỹ thuật do Team Lead Khoan Tạ tổng hợp từ công cụ AI tự động đọc Git commit và mô tả các giai đoạn dự án.
  - Chủ động đối chiếu số liệu trong bảng với lịch sử commit thực tế trên Git (`git log origin/PEEP1`) và phát hiện các điểm sai lệch lớn do AI quét dữ liệu máy móc:
    - **Bỏ sót đóng góp Giai đoạn 3 (GĐ3):** AI chỉ quét commit tính năng code thuần nên bỏ sót hoàn toàn công sức kiểm thử thực địa của mình ở GĐ3: Bản **Báo cáo Thẩm định UI/UX toàn diện (`UI_UX_WAREHOUSE_AUDIT_REPORT.md`)** với 27 ảnh thực tế bắt 3 lỗi P0 Blocker của Frontend, cùng đề xuất giải pháp kỹ thuật **Outbound Next Action** (`outbound-next-action.ts`) đã được merge trực tiếp vào nhánh chính `PEEP1` ở **commit `840076e`**.
    - **Dồn ép tỷ lệ đóng góp Giai đoạn 2 (Backend Core Dev):** AI máy móc tách các task thành cặp `*-ORIG` (chấm người làm móng 45% - 50%) và gán 100% cho task `*-FIX`, vô tình hạ thấp công sức dựng khung kiến trúc NestJS, Swagger UI, 20 bảng CSDL ban đầu và toàn bộ luồng Controller/Service từ BE-01 đến BE-29.
    - **Lệch pha với số lượng commit Git thực tế:** Trên nhánh chính `origin/PEEP1`, mình có **19 commit thực tế** (đứng thứ 4 nhóm, nhiều hơn Lộc 14 commit), nhưng tỷ lệ tính toán lại bị tụt xuống thấp nhất nhóm (7.99%).
    - **Gán nhãn vai trò chưa chuẩn xác:** Nhãn vai trò *"Prototype APIs"* chưa phản ánh đúng bản chất code nền móng của hệ thống.

- **Trao đổi & Thống nhất Thành công Phương án Điều chỉnh cùng Team Lead Khoan Tạ:**
  - Gửi trao đổi thẳng thắn, xây dựng và có số liệu minh chứng rõ ràng cho Team Lead Khoan Tạ trong kênh thảo luận kỹ thuật của nhóm.
  - Team Lead Khoan Tạ đã nhanh chóng ghi nhận, đồng thuận và thực hiện 3 điều chỉnh then chốt trên bảng phân công:
    1. **Bổ sung Task GĐ3 (STT 78 - `G3-UIUX-AUDIT`):** Ghi nhận đích danh Giang Văn Minh chủ trì 100% công việc thẩm định UI/UX thực tế, bắt lỗi P0 và đề xuất máy trạng thái Outbound Next Action, với điểm độ khó kỹ thuật rất cao: **`8.25 / 10`** (Logic: 8.0, Tích hợp: 8.5, Phân tích: 8.5) kèm minh chứng commit `840076e`.
    2. **Tăng mức hoàn thành các task dựng móng Backend GĐ2 thêm 10% - 15%:** Nâng Master Data lên **85%**, các task Setup, Migration, Inbound, Reports, Audit Log lên **80%**, và Outbound/Returns lên **60% - 65%**.
    3. **Xóa bỏ hoàn toàn sheet "Thống kê thành viên":** Loại bỏ con số tỷ lệ 7.99% và mác gán nhãn máy móc, thống nhất để Ban Cố vấn và Mentor đánh giá trực tiếp dựa trên danh mục đầu việc kỹ thuật thực tế và chất lượng sản phẩm bàn giao.

- **Chính thức Hoàn thiện & Nộp Phiếu Tự Đánh Giá Học Việc:**
  - Cập nhật số liệu đồng bộ, rà soát lại toàn bộ 27 tiêu chí và 6 câu hỏi tự nhận xét, lưu file chính thức `Phieu_Tu_Danh_Gia_Peep_GiangVanMinh.xlsx`.
  - Nộp file cho anh Mentor Huy Nguyễn, chuẩn bị chu đáo cho buổi đánh giá tổng kết cuối cùng của chương trình PEEP 2026.

---

### 2. Kế hoạch tiếp theo

- Chuẩn bị kỹ càng cho buổi Đánh Giá & Phỏng Vấn Tổng Kết Cuối Cùng vào ngày thứ Sáu (23/10/2026).
- Rà soát lại toàn bộ hành trình 6 tuần, tổng hợp các bài học kỹ thuật cốt lõi và định hướng phát triển cá nhân khi bước lên vị trí Intern chính thức.
