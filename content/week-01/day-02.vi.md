+++
title = "Ngày 02 (Tuần 2) - 16/09/2026"
weight = 2
+++

## Báo cáo công việc chi tiết: Ngày 2 - Tuần 2

Hôm nay là một ngày làm việc năng suất khi mình hoàn thiện toàn bộ quy trình xây dựng trang Portfolio cá nhân từ con số 0. Thay vì sử dụng template có sẵn, mình đã tự dựng giao diện với Next.js, tích hợp dữ liệu thật từ CV cá nhân và thiết lập luồng CI/CD cơ bản lên Vercel.

### 1. Các hạng mục đã hoàn thành

- **Thiết kế UI/UX & Styling (Tailwind CSS):**
  - Không sử dụng các thiết kế phẳng đơn điệu, mình áp dụng phong cách **Modern Glassmorphism** (kính mờ) đang thịnh hành.
  - Sử dụng các lớp `backdrop-blur`, `mix-blend-screen` cùng CSS Gradients để tạo hiệu ứng ánh sáng (Glow background) chìm dưới nền web.
  - Tối ưu Responsive 100% bằng cách kết hợp Flexbox/Grid và các class của Tailwind (`md:flex`, `grid-cols-1 md:grid-cols-2`), đảm bảo giao diện hiển thị đẹp từ Mobile đến Desktop.
  - Bổ sung các vi-tương-tác (micro-interactions) như: hiệu ứng nổi (hover card), vòng sáng quanh avatar và floating navbar.

- **Cấu trúc Dữ liệu & TypeScript:**
  - Định nghĩa chặt chẽ các kiểu dữ liệu thông qua Interface (`Profile`, `Skill`, `Project`) giúp code an toàn và tránh lỗi typing.
  - Bóc tách hoàn toàn logic giao diện (UI) và dữ liệu (Data) bằng cách đưa toàn bộ thông tin dự án, kỹ năng thực tế từ CV vào file `portfolioData.ts` (Mock Data). Điều này giúp việc nâng cấp, bảo trì nội dung sau này cực kỳ dễ dàng.

- **Tối ưu Hiệu năng (Next/Image):**
  - Khai báo `remotePatterns` trong `next.config.ts` để cấp quyền lấy ảnh từ server của GitHub.
  - Sử dụng component `<Image>` của Next.js thay cho thẻ `<img>` truyền thống để tự động nén kích thước, chuyển đổi định dạng WebP và áp dụng lazy-loading, giúp điểm hiệu năng (First Load) được tối ưu.

- **Quy trình Git Flow & Deployment:**
  - Áp dụng đúng chuẩn quy trình làm việc nhóm: Tạo nhánh riêng `feature/trang-ca-nhan` để phát triển tính năng, không làm ảnh hưởng nhánh chính.
  - Đẩy code, tạo Pull Request (PR) và thực hiện Merge vào nhánh `main` trên GitHub.
  - Triển khai thành công lên nền tảng đám mây Vercel, tự động nhận diện framework Next.js.

### 2. Các bài toán kỹ thuật gặp phải & Cách giải quyết

```text
# Bài toán 1: Lỗi đồng bộ nhánh mới lên GitHub (No upstream branch)
- Tình trạng: Khi gõ `git push` ở nhánh mới tạo dưới local, Git báo lỗi không tìm thấy nhánh đích trên remote.
- Giải pháp: Sử dụng lệnh `git push --set-upstream origin feature/trang-ca-nhan` để ép Git tạo một nhánh tương ứng trên GitHub và tự động theo dõi (track) nhánh đó cho các lần push sau.

# Bài toán 2: Mất đồng bộ lịch sử Git sau khi Merge Pull Request
- Tình trạng: Sau khi merge code trên web GitHub, nhánh `main` dưới máy tính vẫn là bản cũ. Nếu cố tình push báo cáo từ nhánh phụ sẽ gây lỗi ghi đè hoặc sai lịch sử.
- Giải pháp: Chuyển máy tính về lại nhánh chính (`git switch main`), kéo bản cập nhật mới nhất từ web về (`git pull`) để đồng bộ, sau đó mới viết báo cáo và push lên mạng.

# Bài toán 3: Vercel không nhận diện được dự án Next.js
- Tình trạng: Repo GitHub chứa cả dự án Hugo (web báo cáo) và Next.js (web portfolio), khiến Vercel build lỗi 404 do tìm sai thư mục.
- Giải pháp: Trong phần cấu hình Import Project của Vercel, chỉnh sửa thông số `Root Directory` trỏ đích danh vào thư mục con `/portfolio` để hệ thống chạy đúng lệnh build.
```

### 3. Kế hoạch tiếp theo (Day 3)
- Ôn tập kỹ bộ câu hỏi lý thuyết Tuần 2 (đặc biệt là phân biệt CSR, SSR, SSG và cơ chế hoạt động của Virtual DOM).
- Trực tiếp Demo tốc độ tải trang, Responsive và giải thích cấu trúc code dự án cho Mentor.
- Đọc thêm tài liệu về Next.js API Routes để chuẩn bị cho các task phức tạp hơn.

# Bài toán 4: Xử lý xung đột mã nguồn (Merge Conflict) trong Git
- Tình trạng: Khi thực hành gộp nhánh (merge), Terminal báo lỗi "MERGE CONFLICT" chữ đỏ do 2 nhánh cùng chỉnh sửa trên một dòng code, khiến quá trình merge bị tạm dừng.
- Cách giải quyết (Công cụ & Thao tác):
  1. Công cụ sử dụng: Mình sử dụng trình giải quyết xung đột trực quan (Merge Editor) được tích hợp sẵn của IDE **Visual Studio Code (VS Code)**.
  2. Thao tác xử lý chi tiết:
     - Mở file bị báo lỗi conflict trong VS Code. Trình soạn thảo sẽ highlight các vùng mã bị xung đột cùng với các ký tự đánh dấu của Git (<<<<<<<, =======, >>>>>>>).
     - Đọc và phân tích sự khác biệt giữa "Current Change" (Code của nhánh hiện tại đang đứng) và "Incoming Change" (Code từ nhánh đang muốn gộp vào).
     - Dùng các nút bấm UI của VS Code (hoặc sửa bằng tay) chọn "Accept Current Change", "Accept Incoming Change" hoặc "Accept Both Changes" tùy vào logic code mong muốn giữ lại.
     - Kiểm tra file sạch sẽ, không còn các ký tự đánh dấu thừa. Bấm Ctrl + S để lưu file.
     - Mở Terminal chạy lệnh `git add .` để xác nhận đã xử lý xong file đó.
     - Cuối cùng chạy lệnh `git commit -m "Resolved merge conflict"` để chốt hạ và hoàn tất quá trình gộp nhánh.