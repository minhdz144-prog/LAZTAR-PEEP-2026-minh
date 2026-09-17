// Component phần Số liệu ấn tượng - Stats Banner
import { statsData } from "../data/mockData";

export default function Stats() {
    return (
        <section className="py-16 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {statsData.map((stat) => (
                        <div
                            key={stat.id}
                            className="text-center text-white group"
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>

                            {/* Số liệu */}
                            <p className="text-4xl lg:text-5xl font-extrabold mb-2">
                                {stat.value}
                            </p>

                            {/* Nhãn */}
                            <p className="text-white/80 font-medium text-sm uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
