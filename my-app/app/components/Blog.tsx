// Component phần Blog - "Latest News & Blog"
import Image from "next/image";
import { blogPostsData } from "../data/mockData";

export default function Blog() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-orange-50">
            <div className="container mx-auto px-6">

                {/* Tiêu đề phần */}
                <div className="text-center mb-16">
                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                        Blog của chúng tôi
                    </p>
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        Tin tức &{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Bài viết mới nhất
                        </span>
                    </h2>
                </div>

                {/* Grid 3 card bài viết */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPostsData.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
                        >
                            {/* Ảnh thumbnail */}
                            <div className="overflow-hidden h-52 relative">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Ngày đăng nổi lên góc ảnh */}
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                    {post.date}
                                </div>
                            </div>

                            {/* Nội dung bài viết */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight group-hover:text-pink-500 transition-colors duration-200">
                                    {post.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>

                                {/* Footer card: tác giả + link đọc thêm */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                        <span>👤</span>
                                        <span>By <span className="font-semibold text-gray-600">{post.author}</span></span>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-pink-500 font-semibold text-sm hover:text-purple-600 transition-colors flex items-center gap-1"
                                    >
                                        Đọc thêm <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
