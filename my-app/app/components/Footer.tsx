// Component Footer - Chân trang đầy đủ
export default function Footer() {
    const footerLinks = {
        "Liên kết": ["Trang chủ", "Về chúng tôi", "Dịch vụ", "Portfolio", "Blog"],
        "Dịch vụ": ["Thiết kế Website", "Chiến lược & Nghiên cứu", "Phát triển Web", "Digital Marketing", "App Design"],
        "Khác": ["FAQ", "Chính sách bảo mật", "Điều khoản sử dụng", "Hỗ trợ", "Liên hệ"],
    };

    const socialIcons = [
        { label: "Facebook", icon: "f", href: "#" },
        { label: "Instagram", icon: "in", href: "#" },
        { label: "Twitter", icon: "tw", href: "#" },
        { label: "LinkedIn", icon: "li", href: "#" },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">

            {/* Dải Newsletter phía trên */}
            <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <h2 className="text-2xl font-extrabold text-white text-center md:text-left">
                            Đăng ký nhận tin tức mới nhất từ chúng tôi!
                        </h2>
                        {/* Form nhập email */}
                        <div className="flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Nhập địa chỉ email của bạn..."
                                className="flex-1 px-5 py-3.5 rounded-l-full text-gray-800 bg-white focus:outline-none text-sm"
                            />
                            <button className="bg-gray-900 text-white px-6 py-3.5 rounded-r-full font-bold text-sm hover:bg-gray-700 transition-colors">
                                Gửi →
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Phần body Footer: Logo + Links */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Cột 1: Logo + thông tin liên hệ */}
                    <div>
                        <a href="#" className="text-2xl font-extrabold mb-6 block">
                            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                DevAgency
                            </span>
                        </a>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="text-pink-400 mt-0.5">📞</span>
                                <span>1800-123-4567<br />+84 987-654-3210</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-400 mt-0.5">✉️</span>
                                <span>info@devagency.vn<br />support@devagency.vn</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-400 mt-0.5">📍</span>
                                <span>123 Nguyễn Huệ, Q.1<br />TP. Hồ Chí Minh</span>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 2, 3, 4: Các nhóm link */}
                    {Object.entries(footerLinks).map(([groupTitle, links]) => (
                        <div key={groupTitle}>
                            <h3 className="text-white font-bold text-base mb-6">{groupTitle}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2"
                                        >
                                            <span className="text-pink-500">›</span> {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* Dải bản quyền phía dưới cùng */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 <span className="text-pink-400 font-semibold">DevAgency</span>. Bản quyền thuộc về{" "}
                        <span className="text-white font-semibold">Giang Văn Minh</span>.
                    </p>

                    {/* Social icons */}
                    <div className="flex items-center gap-3">
                        {socialIcons.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 hover:text-white hover:scale-110"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </footer>
    );
}
