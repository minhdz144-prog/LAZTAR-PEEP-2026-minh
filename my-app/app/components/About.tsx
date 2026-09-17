// Component phần Giới thiệu - "About Us"
import Image from "next/image";

const checkItems = [
    "Chúng tôi hỗ trợ các chương trình tạo cơ hội thăng tiến cho mọi người.",
    "Cập nhật các sự kiện và xu hướng mới nhất trong ngành.",
    "Xây dựng đội ngũ chiến thắng — vì cuối cùng, tất cả đều về con người.",
    "Luôn bên cạnh bạn từ giai đoạn ý tưởng đến khi ra mắt sản phẩm.",
];

export default function About() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-orange-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* CỘT TRÁI: Ảnh với hiệu ứng trang trí */}
                    <div className="flex-1 relative">
                        {/* Khung trang trí (border ngoài lệch) */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-orange-300 rounded-3xl -z-10"></div>

                        <Image
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=85"
                            alt="Đội ngũ chuyên nghiệp của chúng tôi"
                            width={600}
                            height={500}
                            className="rounded-3xl shadow-2xl object-cover w-full"
                        />

                        {/* Badge kinh nghiệm nổi lên góc trên trái */}
                        <div className="absolute -top-6 -left-6 bg-gradient-to-br from-orange-400 to-pink-500 text-white rounded-2xl p-5 shadow-xl text-center">
                            <p className="text-4xl font-extrabold">10+</p>
                            <p className="text-sm font-medium opacity-90">Năm kinh nghiệm</p>
                        </div>
                    </div>

                    {/* CỘT PHẢI: Nội dung text */}
                    <div className="flex-1">
                        {/* Label nhỏ */}
                        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                            Về chúng tôi
                        </p>

                        {/* Tiêu đề */}
                        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                            Xây dựng Website{" "}
                            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Doanh nghiệp
                            </span>{" "}
                            tốt hơn
                        </h2>

                        {/* Đoạn mô tả */}
                        <p className="text-gray-500 leading-relaxed mb-8">
                            Với hơn 10 năm kinh nghiệm trong lĩnh vực thiết kế và phát triển web, chúng tôi tự hào đã đồng hành cùng hàng trăm doanh nghiệp xây dựng thương hiệu số vững mạnh. Mỗi dự án là một hành trình sáng tạo đầy nhiệt huyết.
                        </p>

                        {/* Danh sách Checklist */}
                        <ul className="space-y-4 mb-10">
                            {checkItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    {/* Icon checkmark gradient */}
                                    <div className="mt-0.5 flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                        ✓
                                    </div>
                                    <span className="text-gray-600 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Nút CTA */}
                        <button className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-pink-200">
                            Tìm hiểu thêm về chúng tôi
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
