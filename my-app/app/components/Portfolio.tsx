// Component phần Portfolio - "Our Latest Work"
import Image from "next/image";
import { portfolioData } from "../data/mockData";

export default function Portfolio() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
            <div className="container mx-auto px-6">

                {/* Tiêu đề phần */}
                <div className="text-center mb-16">
                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                        Portfolio
                    </p>
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        Những dự án{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            mới nhất
                        </span>{" "}
                        của chúng tôi
                    </h2>
                </div>

                {/* Grid 3 cột x 2 hàng = 6 ảnh */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.map((item) => (
                        <div
                            key={item.id}
                            className="relative group rounded-2xl overflow-hidden shadow-lg aspect-[4/3] cursor-pointer"
                        >
                            {/* Ảnh nền */}
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Overlay tối khi hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                                {/* Badge category */}
                                <span className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                                    {item.category}
                                </span>

                                {/* Tiêu đề dự án */}
                                <h3 className="text-white text-xl font-bold mb-3">
                                    {item.title}
                                </h3>

                                {/* Nút xem chi tiết */}
                                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-500 font-bold hover:bg-pink-500 hover:text-white transition-colors duration-200">
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Nút "Xem tất cả" ở giữa */}
                <div className="text-center mt-12">
                    <button className="border-2 border-pink-400 text-pink-500 px-10 py-3.5 rounded-full font-bold hover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300">
                        Xem tất cả dự án
                    </button>
                </div>

            </div>
        </section>
    );
}
