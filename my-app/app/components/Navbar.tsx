// Component Thanh điều hướng (Header/Navbar)
// Sử dụng "use client" vì chúng ta cần tương tác để mở/đóng menu trên mobile
"use client";

import { useState } from "react";

export default function Navbar() {
    // State để quản lý menu mobile mở/đóng
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <a href="#" className="text-2xl font-extrabold">
                        <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            DevAgency
                        </span>
                    </a>

                    {/* Menu điều hướng (Desktop) */}
                    <nav className="hidden md:flex items-center gap-8">
                        {["Trang chủ", "Dịch vụ", "Portfolio", "Blog", "Liên hệ"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-gray-600 font-medium hover:text-pink-500 transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Nút CTA với màu gradient */}
                    <div className="hidden md:block">
                        <button className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg">
                            Nhận báo giá
                        </button>
                    </div>

                    {/* Nút hamburger menu (Mobile) */}
                    <button
                        className="md:hidden text-gray-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="block w-6 h-0.5 bg-gray-600 mb-1.5"></span>
                        <span className="block w-6 h-0.5 bg-gray-600 mb-1.5"></span>
                        <span className="block w-6 h-0.5 bg-gray-600"></span>
                    </button>

                </div>

                {/* Menu mobile (Hiện ra khi ấn hamburger) */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4 border-t pt-4">
                        {["Trang chủ", "Dịch vụ", "Portfolio", "Blog", "Liên hệ"].map((item) => (
                            <a key={item} href="#" className="text-gray-600 font-medium hover:text-pink-500">
                                {item}
                            </a>
                        ))}
                        <button className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold w-fit">
                            Nhận báo giá
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
}
