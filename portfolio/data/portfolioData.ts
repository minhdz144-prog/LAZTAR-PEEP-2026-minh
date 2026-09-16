export interface Profile {
  name: string;
  role: string;
  bio: string;
  peepReportUrl: string;
  githubUrl: string;
  email: string;
}

export interface Skill {
  name: string;
  level: string;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const profileData: Profile = {
  name: "Giang Văn Minh",
  role: "Software Engineering Intern | Full-stack Developer",
  bio: "Sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học Nguyễn Tất Thành. Mình đam mê xây dựng các sản phẩm web Full-stack và áp dụng kiến thức vào bài toán thực tế. Luôn mong muốn được đóng góp, học hỏi từ các kỹ sư đi trước và phát triển trong môi trường làm việc nhóm.",
  peepReportUrl: "https://minhdz144-prog.github.io/LAZTAR-PEEP-2026-minh/", 
  githubUrl: "https://github.com/minhdz144-prog",
  email: "2311554494@nttu.edu.vn",
};

export const skillsData: Skill[] = [
  { name: "JavaScript, TypeScript, Python, Java", level: "Languages", category: "Languages" },
  { name: "React.js, Next.js, TailwindCSS, Zustand", level: "Frontend", category: "Frontend" },
  { name: "Node.js, Express.js, Socket.io, JWT", level: "Backend", category: "Backend" },
  { name: "MongoDB, InfluxDB, Firebase, SQL", level: "Database", category: "Database" },
  { name: "Git, Docker, Grafana, Postman", level: "Tools", category: "Tools" },
  { name: "Android Studio (Java, SQLite)", level: "Mobile", category: "Mobile" },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "IT Job Portal — Recruitment Platform",
    description: "Hệ thống tuyển dụng Full-stack tích hợp AI CV Parser tự động trích xuất kỹ năng, thuật toán Skill-Matching và thông báo Real-time.",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    link: "https://github.com/minhdz144-prog/do_an_chuyen_nganh",
  },
  {
    id: 2,
    title: "FER System — Facial Emotion Recognition",
    description: "Ứng dụng AI nhận diện cảm xúc khuôn mặt tích hợp vòng lặp MLOps, sử dụng OpenCV để nhận diện vùng mặt và lưu log dự đoán.",
    tech: ["Python", "TensorFlow", "Streamlit", "OpenCV"],
    link: "#",
  },
  {
    id: 3,
    title: "Electricity Monitoring System",
    description: "Xây dựng pipeline xử lý dữ liệu IoT: Spark Streaming -> InfluxDB -> Grafana để trực quan hóa lượng điện tiêu thụ real-time.",
    tech: ["Kafka", "Spark", "InfluxDB", "Grafana"],
    link: "#",
  },
  {
    id: 4,
    title: "Quản Lý Nhà Trọ App",
    description: "Ứng dụng Android Native giúp chủ trọ quản lý khách thuê, phòng trống, hóa đơn và đồng bộ hóa qua Firebase.",
    tech: ["Java", "Android Studio", "SQLite", "Firebase"],
    link: "https://github.com/minhdz144-prog/quan-ly-nha-tro",
  },
];