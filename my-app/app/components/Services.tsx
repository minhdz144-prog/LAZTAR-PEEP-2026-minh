// Component phần Dịch vụ - "Our Digital Services"
import Image from "next/image";
import { servicesData } from "../data/mockData";

export default function Services() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">

                {/* Tiêu đề phần */}
                <div className="text-center mb-16">
                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                        Chúng tôi làm tốt nhất
                    </p>
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        Dịch vụ{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Kỹ thuật số
                        </span>{" "}
                        của chúng tôi
                    </h2>
                </div>

                {/* Grid 3 card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white border border-gray-100"
                        >
                            {/* Ảnh card */}
                            <div className="overflow-hidden h-52">
                                <Image
                                    src={service.imageUrl}
                                    alt={service.title}
                                    width={600}
                                    height={300}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Nội dung card */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-pink-500 font-semibold hover:gap-3 transition-all duration-200"
                                >
                                    Tìm hiểu thêm <span>→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
