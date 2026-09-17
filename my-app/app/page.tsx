// Trang chính - Lắp ráp tất cả Component lại thành trang hoàn chỉnh
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      {/* 1. Thanh điều hướng cố định trên cùng */}
      <Navbar />

      {/* 2. Hero - Phần đầu trang nổi bật */}
      <Hero />

      {/* 3. Services - Dịch vụ của chúng tôi */}
      <Services />

      {/* 4. About - Giới thiệu công ty */}
      <About />

      {/* 5. Stats - Dải số liệu ấn tượng */}
      <Stats />

      {/* 6. Features - Tính năng / Quy trình làm việc */}
      <Features />

      {/* 7. Portfolio - Dự án đã thực hiện */}
      <Portfolio />

      {/* 8. Testimonials - Đánh giá khách hàng */}
      <Testimonials />

      {/* 9. Blog - Tin tức & bài viết */}
      <Blog />

      {/* 10. Footer - Chân trang */}
      <Footer />
    </main>
  );
}
