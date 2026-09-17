// Component phần Đánh giá khách hàng - Testimonials
import Image from "next/image";
import { testimonialsData } from "../data/mockData";

export default function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">

                {/* Tiêu đề phần */}
                <div className="text-center mb-16">
                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                        Khách hàng nói gì
                    </p>
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        Đánh giá từ{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            khách hàng thật
                        </span>
                    </h2>
                </div>

                {/* Grid 3 card testimonial */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`relative p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${index === 1
                                    ? "bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-white"
                                    : "bg-gray-50 text-gray-800"
                                }`}
                        >
                            {/* Dấu ngoặc kép trang trí */}
                            <div className={`text-7xl font-serif leading-none mb-4 -mt-2 ${index === 1 ? "text-white/30" : "text-pink-200"
                                }`}>
                                "
                            </div>

                            {/* Nội dung đánh giá */}
                            <p className={`leading-relaxed mb-8 text-sm ${index === 1 ? "text-white/90" : "text-gray-600"
                                }`}>
                                {testimonial.content}
                            </p>

                            {/* Thông tin người dùng */}
                            <div className="flex items-center gap-4">
                                {/* Avatar */}
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image
                                        src={testimonial.avatarUrl}
                                        alt={testimonial.name}
                                        fill
                                        className="rounded-full object-cover ring-2 ring-white"
                                    />
                                </div>

                                {/* Tên và chức vụ */}
                                <div>
                                    <p className={`font-bold text-sm ${index === 1 ? "text-white" : "text-gray-800"
                                        }`}>
                                        {testimonial.name}
                                    </p>
                                    <p className={`text-xs ${index === 1 ? "text-white/70" : "text-gray-400"
                                        }`}>
                                        {testimonial.role}
                                    </p>
                                </div>

                                {/* Rating sao */}
                                <div className="ml-auto flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`text-sm ${index === 1 ? "text-yellow-300" : "text-yellow-400"
                                            }`}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
