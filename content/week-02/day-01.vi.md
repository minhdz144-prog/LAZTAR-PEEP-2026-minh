+++
title = "Ngày 01 (Tuần 2) - 21/09/2026"
weight = 1
+++

## Báo cáo công việc chi tiết: Tuần 2 - Ngày 1

Hôm nay mình làm việc Onsite tại văn phòng công ty. Công việc chính trong ngày là tiếp nhận thông tin dự án mới **Mini-WMS (FreshLink Produce)**, nghiên cứu các tài liệu tổng quan hệ thống quản lý kho nông sản và làm quen với các quy tắc nghiệp vụ cốt lõi.

### 1. Các hạng mục đã hoàn thành

- **Nghiên cứu tài liệu tổng quan dự án Mini-WMS:**
  - Tìm hiểu lý do hình thành dự án: Mô phỏng hệ thống quản lý kho nông sản thực tế cho khách hàng "FreshLink Produce", giúp nắm vững nghiệp vụ kho thực tế và tạo sản phẩm chuẩn mực.
  - Nắm bắt luồng nghiệp vụ End-to-End của kho nông sản: **NHẬN HÀNG → CẤT HÀNG → PHÂN BỔ TỒN → SOẠN HÀNG → ĐÓNG GÓI → GIAO HÀNG → (TRẢ HÀNG)**.
  - Thống nhất danh mục Công nghệ (Tech Stack) sẽ sử dụng:
    - **Backend:** NestJS (TypeScript).
    - **Database:** PostgreSQL 16 kết hợp với Prisma ORM.
    - **Frontend:** React + TypeScript trên Next.js (Mobile-first cho màn hình vận hành).
    - **Hạ tầng:** Docker Compose + GitHub Actions CI.

- **Nghiên cứu 8 "bí kíp" nghiệp vụ kho lõi:**
  - **Tồn khả dụng ≠ Tồn vật lý:** Phân biệt rõ `qty_on_hand` (tồn vật lý thực tế trên kệ) và `qty_available` (tồn thực tế trừ đi lượng đã bị đơn hàng khác giữ chỗ `qty_reserved`).
  - **Quy đổi đơn vị tính (UoM):** Mọi số lượng lưu trữ đều phải quy đổi về đơn vị chuẩn (Base UoM - ví dụ: kg), tránh lưu số thùng/hộp trực tiếp gây sai lệch.
  - **Xuất hàng theo FEFO (First Expired, First Out):** Hàng tươi sống ưu tiên xuất lô gần hết hạn trước, không áp dụng FIFO thuần túy.
  - **Xử lý trọng lượng thực tế (Catch weight):** Hỗ trợ chênh lệch giữa số lượng đặt và cân nặng giao thực tế.
  - **Quy trình kiểm kê & xử lý chênh lệch:** Nhân viên kho không tự sửa số liệu mà phải tạo phiếu chờ cấp có thẩm quyền duyệt.
  - **Kiểm soát đồng thời (Concurrency Control):** Đảm bảo tránh tình trạng tồn kho âm khi nhiều nhân viên cùng thao tác giữ chỗ/xuất hàng tại một thời điểm.

- **Nắm vững các quy tắc "sống còn" kỹ thuật:**
  - Mọi thay đổi số dư tồn kho bắt buộc phải đi qua một service duy nhất (`InventoryLedgerService`). Cấm UPDATE trực tiếp số tồn từ các module khác.
  - Bảng ghi lịch sử biến động (`stock_ledger`) tuân thủ nguyên tắc Append-only (chỉ cho phép INSERT, không UPDATE/DELETE). Sửa sai bằng bút toán đảo (REVERSAL).

### 2. Kế hoạch tiếp theo

- Đọc tài liệu kế hoạch thực hiện **Sprint 0** (Thiết kế nghiệp vụ & Database WMS).
- Họp nhóm Trainee 5 người để phân chia vai trò và nhận domain thiết kế chuyên trách.
