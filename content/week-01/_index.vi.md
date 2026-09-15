+++
title = "Ngày 01 - 15/09/2026"
weight = 1
+++

## Tổng kết công việc Ngày 1

Hôm nay mình đã học và thực hành thành công việc thiết lập môi trường làm việc cơ bản và xuất bản website báo cáo.

### 1. Kiến thức đã học
- **Quản lý mã nguồn với Git:** Biết cách khởi tạo cấu hình, kết nối code trên máy tính với GitHub.
- **Xây dựng Website với Hugo:** Hiểu cấu trúc thư mục tĩnh, cách clone code có chứa theme (`submodule`) và cách cấu hình file `config.toml`.
- **Deploy (Xuất bản) Website:** Biết cách sử dụng GitHub Actions và GitHub Pages để tự động đưa trang web lên mạng.

### 2. Các lệnh Git thường dùng (Ghi chú)

```bash
# 1. Tải source code từ trên mạng về máy (bắt buộc kèm đuôi này để tải được theme)
git clone --recurse-submodules <link-repo>

# 2. Đổi địa chỉ kết nối sang kho lưu trữ (repo) của riêng mình
git remote set-url origin <link-repo-cua-minh>

# 3. Đưa tất cả các file vừa chỉnh sửa vào hàng đợi (chuẩn bị lưu)
git add .

# 4. Ghi nhận lịch sử chỉnh sửa kèm theo lời nhắn (Bắt buộc phải có dấu ngoặc kép)
git commit -m "Cập nhật báo cáo ngày 1"

# 5. Đẩy toàn bộ code và lịch sử từ máy tính lên GitHub
git push
``` 
### 3. Khó khăn gặp phải & Cách giải quyết
```bash
# Lỗi 1: Windows chặn không cho chạy lệnh Hugo (hugo.exe) do dính chính sách bảo mật hệ thống.
Cách giải quyết: Đã tìm ra nguyên nhân do tính năng Smart App Control của Windows 11. Xử lý bằng cách tắt giới hạn bảo mật này để chạy được lệnh.
# Lỗi 2: Quá trình tự động Build web trên GitHub bị báo lỗi X đỏ (Fail).
Cách giải quyết: Lỗi do GitHub chưa cấp quyền ghi cho bot. Đã vào Settings -> Actions -> General và cấp quyền Read and write permissions thành công.
```
### 4. Kế hoạch ngày mai
Tiếp tục tìm hiểu sâu hơn về Git Flow (Tạo Branch, Pull Request, và Merge code).
Hoàn thiện bài thực hành xử lý xung đột (conflict).