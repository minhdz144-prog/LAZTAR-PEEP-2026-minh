+++
title = "Ngày 01 (Tuần 3) - 28/09/2026"
weight = 1
+++

## Báo cáo công việc chi tiết: Tuần 3 - Ngày 1

Hôm nay mình làm việc Remote. Đây là Ngày 4 (ngày cuối) của **Sprint 0: Thiết kế nghiệp vụ & Database WMS**. Nhiệm vụ quan trọng nhất trong ngày là rà soát tổng duyệt lại toàn bộ các sản phẩm thiết kế theo checklist Definition of Done và đóng gói nộp tài liệu lên Google Drive công ty đúng hạn.

### 1. Các hạng mục đã hoàn thành

- **Rà soát chất lượng bộ tài liệu thiết kế theo Definition of Done (Mục 8 Kế hoạch):**
  - [x] **Business Flow:** Đảm bảo bao phủ đủ 4 luồng Inbound, Outbound, Transfer, Adjustment và phân chia Swimlane rõ ràng theo từng vai trò vận hành.
  - [x] **ERD toàn hệ thống:** Sơ đồ PlantUML tổng thể render thành công, không có bảng "mồ côi", mọi liên kết khóa chính - khóa ngoại đều nhất quán.
  - [x] **Data Dictionary:** Đầy đủ thông tin về tên bảng, tên cột, kiểu dữ liệu, ràng buộc NULL, giá trị mặc định, khóa chính/khóa ngoại/khóa duy nhất, mô tả chi tiết và ví dụ thực tế cho cả 3 bảng thuộc Domain D (`lots`, `inventory`, `inventory_reservations`).
  - [x] **Business Rules:** Hoàn thiện bộ 5 quy tắc nghiệp vụ chuẩn mực cho Domain D (mã `BR-D-01` đến `BR-D-05`) có nêu rõ lý do áp dụng và thời điểm kiểm tra.
  - [x] **Paper UAT:** Đã chạy qua và vượt qua tất cả 8 kịch bản kiểm thử trên giấy từ buổi họp tích hợp ngày 25/09.

- **Đóng gói & Nộp bộ tài liệu thiết kế Sprint 0 lên Google Drive:**
  - Chuẩn hóa cấu trúc thư mục lưu trữ theo đúng quy định công ty:
    - `WMS_Sprint0/00_Plan/`: Chứa file kế hoạch thực hiện & biên bản họp.
    - `WMS_Sprint0/01_Business_Flow/`: Chứa mã nguồn `.puml` và sơ đồ xuất dạng PNG.
    - `WMS_Sprint0/02_ERD/`: Chứa file `erd_all.puml`, `erd_domain_D.puml` và ảnh render `erd_v1.png`.
    - `WMS_Sprint0/03_Data_Dictionary/`: Chứa file Google Sheet / Excel tổng hợp tab Domain D.
    - `WMS_Sprint0/04_Business_Rules/`: Chứa tài liệu danh sách Business Rules tổng hợp.
  - **Đường dẫn thư mục nộp bài trên Google Drive:** [Sprint 0 Deliverables - Google Drive](https://drive.google.com/drive/folders/17OlEGvn8UxOHZ_T6Hw--2NqNNPheBLxh)
  - Hoàn tất tải toàn bộ tài liệu lên Google Drive dự án trước thời hạn chót cuối ngày (Hết ngày 28/09/2026).

### 2. Kế hoạch tiếp theo

- Đi làm Onsite tại văn phòng vào ngày mai (Thứ 3, 29/09).
- Tham gia buổi họp Review kết quả Sprint 0 cùng Mentor và Leader.
- Sẵn sàng chuyển sang giai đoạn phát triển Backend (Tuần 2 trong lộ trình Mini-WMS).
