// Component phần Tính năng - "Our Features / Behind The Story"
import Image from "next/image";
import { featuresData } from "../data/mockData";

export default function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* CỘT TRÁI: Title + danh sách tính năng */}
                    <div className="flex-1">
                        {/* Label nhỏ */}
                        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                            Tính năng nổi bật
                        </p>

                        {/* Tiêu đề */}
                        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-10">
                            Câu chuyện đằng sau{" "}
                            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                DevAgency
                            </span>
                        </h2>

                        {/* Danh sách tính năng với icon lớn */}
                        <div className="space-y-6">
                            {featuresData.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="flex items-start gap-5 p-5 rounded-2xl hover:bg-orange-50 transition-colors duration-300 group cursor-pointer"
                                >
                                    {/* Icon lớn với nền gradient */}
                                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>

                                    {/* Nội dung */}
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CỘT PHẢI: Ảnh minh họa */}
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Vòng tròn trang trí */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-70 -z-10"></div>

                            <Image
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=85"
                                alt="Quy trình làm việc chuyên nghiệp"
                                width={500}
                                height={550}
                                className="rounded-3xl shadow-2xl object-cover w-full"
                            />

                            {/* Floating badge */}
                            <div className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-orange-100">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl">
                                    ⚡
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">Phát triển nhanh</p>
                                    <p className="text-gray-500 text-xs">3x tốc độ thông thường</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
