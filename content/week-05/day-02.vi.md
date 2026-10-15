+++
title = "Ngày 02 (Tuần 5) - 13/10/2026"
weight = 2
+++

## Báo cáo công việc chi tiết: Tuần 5 - Ngày 2

Hôm nay mình làm việc Remote (từ xa). Trọng tâm công việc trong ngày là phối hợp cùng team giải quyết các vấn đề kỹ thuật sau đợt kiểm thử tích hợp ban đầu, rà soát và giải trình tính toàn vẹn của dữ liệu Backend (làm rõ sự khác biệt giữa dữ liệu mẫu demo và dữ liệu lưu trữ cơ sở dữ liệu thật), đồng thời tiếp tục hoàn thiện các luồng nghiệp vụ tiếp theo trong Kịch bản vàng (Golden Scenario) trước thời điểm chốt cột mốc quan trọng của dự án.

### 1. Các hạng mục đã hoàn thành

- **Rà soát & Xác minh Tính Toàn vẹn Kiến trúc Dữ liệu Backend (Real DB vs Mock Data):**
  - Rà soát chi tiết toàn bộ các tầng Controller, Service và Repository trong `warehouse_be` để làm rõ băn khoăn về việc dữ liệu API là "giả lập (mock)" hay "đã lưu cơ sở dữ liệu".
  - **Kết luận kỹ thuật:** Toàn bộ các API nghiệp vụ cốt lõi của hệ thống (Quản lý tồn kho `inventories`, Thẻ kho `stock_ledger`, Phân bổ tự động theo thuật toán FEFO `outbound_allocations`, Quản lý đơn xuất `outbound_orders`, Phiếu tiếp nhận nhập hàng `receipts`, Kiểm soát khóa vị trí và phê duyệt Maker-Checker) đều được thiết kế và triển khai chuẩn mực qua Prisma ORM, kết nối và ghi dữ liệu bất biến xuống cơ sở dữ liệu PostgreSQL (Neon Cloud DB và Docker local).
  - Làm rõ với Team Lead Khoan Tạ và nhóm: Chỉ có kịch bản nạp dữ liệu khởi tạo (`seed:demo`) là sử dụng bộ dữ liệu mẫu định sẵn để phục vụ demo nhất quán, còn toàn bộ quy trình nghiệp vụ sau đó đều thao tác với dữ liệu thực 100% trên database.

- **Thực thi các Luồng Nghiệp vụ Tiếp theo trong Kịch bản Vàng (Golden Scenario):**
  - **Luồng 4 (Thẩm định Chất lượng QC Hàng trả lại):**
    - Tiếp tục xử lý 5 kg Cà chua Đà Lạt (`DEMO-TOMATO`) đã tiếp nhận vào ô kiểm định `QC-01` từ ngày hôm trước.
    - Thực hiện phân loại chất lượng: 3 kg đạt chuẩn được duyệt nhập lại kho lưu trữ (`RESTOCK`) đưa về ô kệ `STORAGE` để tiếp tục bán; 2 kg dập nát hư hỏng trong quá trình vận chuyển được phân loại thành phế phẩm (`DAMAGED`) và điều chuyển sang ô cách ly `DAMAGED-01`.
  - **Luồng 5 (Tiêu hủy Hàng hỏng vật lý - Physical Scrap Disposal):**
    - Thực hiện quy trình tiêu hủy vật lý đối với 1 kg hàng hỏng tại ô `DAMAGED-01`.
    - Hệ thống tự động ghi nhận giao dịch xuất hủy phế phẩm `LOT_DISPOSE_OUT`, giảm trừ trực tiếp tồn kho vật lý và ghi log kiểm toán tương ứng.
  - **Luồng 6 (Kiểm kê Kho & Điều chỉnh Hao hụt Lệch tồn - Cycle Count Variance):**
    - Thiết lập đợt kiểm kê định kỳ đối với mặt hàng `DEMO-TOMATO`.
    - Hệ thống ghi nhận tồn sổ sách lý thuyết là 63 kg, nhân viên kiểm đếm thực tế ngoài kệ ghi nhận 61 kg (phát hiện hao hụt tự nhiên -2 kg do bay hơi/khô héo).
    - Tạo phiếu yêu cầu điều chỉnh tồn kho, sử dụng tài khoản Quản lý kho (`demo.manager`) phê duyệt điều chỉnh giảm 2 kg, ghi nhận biến động `ADJUST_OUT` vào thẻ kho.
  - **Đối soát Số học Dòng Tồn kho Chốt:**
    - Xác minh công thức toán học bảo toàn tồn kho xuyên suốt toàn bộ chu trình:
      $$\mathbf{100\text{ kg (Nhập)}} - \mathbf{40\text{ kg (Xuất)}} + \mathbf{5\text{ kg (Trả)}} - \mathbf{1\text{ kg (Hủy)}} - \mathbf{2\text{ kg (Kiểm kê)}} = \mathbf{62\text{ kg (Tồn chốt)}}$$
    - Số liệu chốt cuối cùng trên cơ sở dữ liệu hoàn toàn trùng khớp với thiết kế kịch bản.

- **Chuẩn bị Dữ liệu & Tài liệu cho Đợt Hợp nhất Nhánh Lớn:**
  - Tổng hợp danh sách các yêu cầu sửa đổi giao diện phát hiện trong buổi kiểm thử ngày 12/10 để chuyển tiếp cho team Frontend.
  - Chuẩn bị môi trường sẵn sàng cho việc pull và kiểm thử tích hợp nhánh mới `feat/PEEP1-FE15-return` (Pull Request #94).

### 2. Kế hoạch tiếp theo

- Lên văn phòng làm việc Onsite vào ngày mai (Thứ Tư, 14/10/2026).
- Pull nhánh mới `feat/PEEP1-FE15-return`, tiến hành chạy kiểm thử toàn diện trên trình duyệt thật (Desktop & Mobile) từ góc nhìn thủ kho thực địa.
- Hoàn thiện tài liệu Báo cáo Kiểm định UI/UX và chụp ảnh minh chứng thực tế.
