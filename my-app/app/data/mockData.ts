// =========================================
// INTERFACES (Khuôn mẫu kiểu dữ liệu)
// =========================================

export interface Service {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

export interface Stat {
    id: number;
    value: string;
    label: string;
    icon: string;
}

export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatarUrl: string;
}

export interface BlogPost {
    id: number;
    title: string;
    date: string;
    author: string;
    imageUrl: string;
    excerpt: string;
}

// =========================================
// MOCK DATA
// =========================================

// Ảnh đều lấy từ Unsplash (URL trực tiếp, không cần tải về)
export const servicesData: Service[] = [
    {
        id: 1,
        title: "Thiết kế Website",
        description: "Chúng tôi tạo ra những trang web đẹp, hiện đại và tối ưu hóa trải nghiệm người dùng.",
        imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    },
    {
        id: 2,
        title: "Chiến lược & Nghiên cứu",
        description: "Phân tích thị trường và đối thủ cạnh tranh để đưa ra chiến lược tăng trưởng hiệu quả.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
        id: 3,
        title: "Theo dõi tăng trưởng",
        description: "Dashboard phân tích dữ liệu real-time, giúp bạn nắm bắt mọi chỉ số kinh doanh.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
];

export const statsData: Stat[] = [
    { id: 1, value: "18M+", label: "Khách hàng hài lòng", icon: "😊" },
    { id: 2, value: "20M+", label: "Dự án hoàn thành", icon: "📈" },
    { id: 3, value: "30M+", label: "Dự án đã khởi chạy", icon: "🚀" },
    { id: 4, value: "50+", label: "Năm kinh nghiệm", icon: "🏆" },
];

export const featuresData: Feature[] = [
    {
        id: 1,
        title: "Thu thập Ý tưởng & Phân tích",
        description: "Lắng nghe, nghiên cứu và chắt lọc ý tưởng để đặt nền móng vững chắc cho dự án.",
        icon: "💡",
    },
    {
        id: 2,
        title: "Thiết kế & Phát triển",
        description: "Hiện thực hóa ý tưởng thành sản phẩm với code sạch và giao diện mượt mà.",
        icon: "⚙️",
    },
    {
        id: 3,
        title: "Kiểm thử & Khởi chạy",
        description: "Đảm bảo chất lượng tối đa trước khi đưa sản phẩm đến tay người dùng cuối.",
        icon: "🎯",
    },
];

export const portfolioData: PortfolioItem[] = [
    { id: 1, title: "Nền tảng E-commerce", category: "Web Development", imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&q=80" },
    { id: 2, title: "App Di động SaaS", category: "Mobile Design", imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80" },
    { id: 3, title: "Dashboard Phân tích", category: "Data Visualization", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
    { id: 4, title: "Landing Page Agency", category: "UI/UX Design", imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80" },
    { id: 5, title: "Hệ thống CRM", category: "Web Development", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
    { id: 6, title: "Platform Giáo dục", category: "EdTech", imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80" },
];

export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Giang Văn Minh",
        role: "CEO & Founder, TechVN",
        content: "Từ khi hợp tác, hiệu suất team tăng lên 200%. Giao diện mượt mà, team hỗ trợ tuyệt vời!",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
        id: 2,
        name: "Nguyễn Thị Lan",
        role: "Product Manager, StartupX",
        content: "Giải pháp hoàn hảo cho doanh nghiệp vừa và nhỏ. Dễ dùng, tính năng đầy đủ và giá cả hợp lý.",
        avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b6cdef11?w=100&q=80",
    },
    {
        id: 3,
        name: "Trần Quốc Hùng",
        role: "CTO, DevHouse",
        content: "Code sạch, kiến trúc rõ ràng. Là lựa chọn số 1 của chúng tôi cho mọi dự án từ trước đến nay.",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
];

export const blogPostsData: BlogPost[] = [
    {
        id: 1,
        title: "10 xu hướng thiết kế Web nổi bật năm 2026",
        date: "15 THÁNG 9, 2026",
        author: "Giang Văn Minh",
        imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
        excerpt: "Khám phá những xu hướng thiết kế đang định hình lại cách chúng ta xây dựng web hiện đại.",
    },
    {
        id: 2,
        title: "Tại sao Next.js là lựa chọn tốt nhất cho dự án SaaS?",
        date: "10 THÁNG 9, 2026",
        author: "Giang Văn Minh",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
        excerpt: "So sánh chi tiết Next.js với các framework khác và lý do bạn nên chọn nó cho sản phẩm của mình.",
    },
    {
        id: 3,
        title: "Bí quyết tối ưu hóa hiệu suất ứng dụng React",
        date: "5 THÁNG 9, 2026",
        author: "Giang Văn Minh",
        imageUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&q=80",
        excerpt: "Các kỹ thuật thực chiến giúp ứng dụng React của bạn chạy nhanh hơn và mượt mà hơn.",
    },
];
