// Component Hero Section - Phần đầu trang nổi bật nhất
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-purple-50 pt-24 pb-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[80vh]">

                    {/* CỘT TRÁI: Nội dung chữ */}
                    <div className="flex-1 max-w-xl">
                        {/* Badge nhỏ phía trên */}
                        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                            <span>⭐</span>
                            <span>Chúng tôi là những người giỏi nhất</span>
                        </div>

                        {/* Tiêu đề chính */}
                        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            Kiến tạo{" "}
                            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Website
                            </span>{" "}
                            đẳng cấp doanh nghiệp
                        </h1>

                        {/* Mô tả */}
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            Chúng tôi xây dựng các mối quan hệ là nền tảng cho giai đoạn tăng trưởng tiếp theo của tổ chức bạn. Sáng tạo. Chuyên nghiệp. Hiệu quả.
                        </p>

                        {/* Danh sách điểm nổi bật */}
                        <ul className="space-y-3 mb-10">
                            {[
                                "Bằng thạc sĩ chuyên ngành thiết kế",
                                "Thiết kế mobile xuất sắc hàng đầu",
                                "Đội ngũ 50+ chuyên gia giàu kinh nghiệm",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-gray-600">
                                    <span className="w-5 h-5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white text-xs">
                                        ✓
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Nút bấm CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-xl shadow-pink-200">
                                BẮT ĐẦU NGAY
                            </button>
                            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-full font-bold text-lg hover:border-pink-400 hover:text-pink-500 transition-colors">
                                Xem Portfolio
                            </button>
                        </div>
                    </div>

                    {/* CỘT PHẢI: Ảnh minh họa từ Unsplash */}
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-full max-w-lg">
                            {/* Vòng tròn trang trí phía sau ảnh */}
                            <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-60 -z-10"></div>
                            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-60 -z-10"></div>

                            {/* Ảnh chính */}
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=85"
                                alt="Team làm việc sáng tạo"
                                width={600}
                                height={500}
                                className="rounded-3xl shadow-2xl object-cover w-full"
                                priority
                            />

                            {/* Badge nổi lên (Floating card) */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                                    🚀
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">500+ Dự án</p>
                                    <p className="text-gray-500 text-xs">Hoàn thành xuất sắc</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
