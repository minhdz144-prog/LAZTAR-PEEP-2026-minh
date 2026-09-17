+++
title = "Ngày 03 (Tuần 1) - 17/09/2026"
weight = 3
+++

## Báo cáo công việc chi tiết: Tuần 1 - Ngày 3

Hôm nay mình tiếp tục phát triển kỹ năng với Next.js và Tailwind CSS thông qua việc xây dựng một trang SaaS Landing Page hoàn chỉnh. Đồng thời, mình cũng xử lý các vấn đề liên quan đến luồng làm việc Git (Git Workflow) và triển khai dự án độc lập lên Vercel.

### 1. Các hạng mục đã hoàn thành

- **Xây dựng SaaS Landing Page (Next.js & Tailwind CSS):**
  - Hoàn thiện 10 component giao diện độc lập bao gồm: Navbar, Hero, Services, About, Stats, Features, Portfolio, Testimonials, Blog và Footer.
  - Ứng dụng kỹ thuật truyền dữ liệu động thông qua Mock Data (`mockData.ts`) kết hợp với hàm `map()` của React, giúp giao diện tái sử dụng linh hoạt và code ngắn gọn hơn.
  - Khắc phục các cảnh báo hiệu năng hình ảnh (Image Optimization) trên trình duyệt bằng cách thêm thuộc tính `sizes` cho `<Image fill />`.

- **Quản lý Source Code & Xử lý sự cố Git:**
  - Quy hoạch lại cấu trúc mã nguồn: Tách thành công các dự án `my-app` (Landing Page) và `portfolio` đang nằm chung trong Monorepo ra thành các Repository riêng biệt trên GitHub để dễ quản lý.
  - Sửa lỗi lịch sử Git: Ứng dụng Interactive Rebase (`git rebase -i`) và Filter-Branch script để ghi đè (amend) thông tin tác giả (author/committer) bị sai trong các commit cũ, đảm bảo tính chuyên nghiệp cho lịch sử mã nguồn.

- **Deploy & Vercel Configuration:**
  - Ngắt kết nối các dự án bị lỗi cấu hình cũ trên Vercel.
  - Khởi tạo dự án mới trên Vercel và liên kết thành công với các Repository độc lập vừa bóc tách.
  - Cấu hình custom domain thành công (`portfolio-minhdz144.vercel.app`).

### 2. Source Code & Live Demo (Đường dẫn GitHub)

Theo yêu cầu, đây là đường dẫn mã nguồn của 2 dự án đã được bóc tách và hoàn thiện trong hôm nay:

1. **SaaS Landing Page:** 
   - GitHub Repo: [https://github.com/minhdz144-prog/saas-landing-page](https://github.com/minhdz144-prog/saas-landing-page)
2. **Portfolio cá nhân:**
   - GitHub Repo: [https://github.com/minhdz144-prog/portfolio-Minh](https://github.com/minhdz144-prog/portfolio-Minh)
   - Live Demo: [https://portfolio-minhdz144.vercel.app](https://portfolio-minhdz144.vercel.app)

### 3. Tài liệu lý thuyết đã tìm hiểu

- Ghi chú lý thuyết và kiến thức: [Google Docs](https://docs.google.com/document/d/165sNM7znFS9uW2Y5OKRvPK-hXXvIbDK5aSpcgVbyJuE/edit?usp=drive_link)

