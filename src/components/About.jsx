import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-10">
            {/* TITLE */}
            <div className="w-fit bg-gradient-to-r from-blue-600 to-cyan-600 rounded-r-4xl shadow-xl py-3 px-10 md:py-5 md:pl-50">
                <h2 className="text-white text-xl md:text-4xl font-bold">About Me</h2>
            </div>

            <div className="px-5 md:px-20 xl:px-50 mt-10 gap-10 space-y-5">
                {/* LEFT SIDE */}
                <div className="space-y-5">
                    <p className="font-medium text-blue-200 leading-relaxed">
                        Saya adalah seorang Web Developer yang memiliki minat dalam
                        pengembangan aplikasi berbasis web. Saya terbiasa menggunakan
                        Laravel dan React untuk membangun sistem yang efisien, terstruktur,
                        dan mudah digunakan. Selain itu, saya juga memiliki pengalaman dalam
                        pengelolaan database serta pengembangan fitur seperti export dan
                        import data.
                    </p>
                    
                </div>

                <div>
                    <h4 className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 font-bold text-2xl mb-5">
                        Experience
                    </h4>

                    <div className="space-y-6">
                        <div className="border-l-2 border-cyan-400 pl-4">
                            <h5 className="text-white font-semibold">
                                Full Stack Developer Intern
                            </h5>
                            <p className="text-sm text-gray-400">
                                PT Tiga Serangkai Pustaka Mandiri • Desember 2025 - Sekarang
                            </p>

                            <ul className="text-blue-200 mt-2 list-disc pl-5 space-y-1">
                                <li>
                                    Mengembangkan sistem CRM berbasis Laravel + React untuk
                                    mendukung manajemen data pengguna
                                </li>
                                <li>
                                    Melakukan migrasi dari wordpress ke Laravel untuk website
                                    PerpusKita
                                </li>
                                <li>
                                    Melakukan migrasi dari wordpress ke Laravel untuk website
                                    tiseraHub
                                </li>
                                <li>
                                    Mengoptimasi query database untuk meningkatkan performa
                                    aplikasi
                                </li>
                            </ul>
                        </div>

                        <div className="border-l-2 border-cyan-400 pl-4">
                            <h5 className="text-white font-semibold">
                                Web Developer
                            </h5>
                            <p className="text-sm text-gray-400">
                                Yayasan Arsa Nur Hasta • Oktober 2025 - Desember 2025
                            </p>

                            <ul className="text-blue-200 mt-2 list-disc pl-5 space-y-1">
                                <li>
                                    Mengembangkan website pemesanan berbasis web untuk mempermudah proses pemesanan layanan
                                </li>
                                <li>
                                    Mendesain dan mengelola database menggunakan MySQL untuk menyimpan data pesanan
                                </li>
                                <li>
                                    Mengimplementasikan fitur CRUD (Create, Read, Update, Delete) untuk manajemen data pemesanan
                                </li>
                                <li>
                                    Membangun sistem validasi form untuk memastikan data yang diinput sesuai
                                </li>
                                <li>
                                    Melakukan pengujian sistem untuk memastikan aplikasi berjalan dengan baik
                                </li>
                            </ul>
                        </div>
                        <div className="border-l-2 border-cyan-400 pl-4">
                            <h5 className="text-white font-semibold">
                                Praktik Kerja Lapangan
                            </h5>
                            <p className="text-sm text-gray-400">
                                Cahz ID • Juli 2024 - Augustus 2024
                            </p>

                            <ul className="text-blue-200 mt-2 list-disc pl-5 space-y-1">
                                <li>
                                    Berkontribusi dalam pengembangan website ID Farms berbasis web
                                </li>
                                <li>
                                    Membuat tabel database
                                </li>
                                <li>
                                    Mengimplementasikan fitur dasar untuk mendukung kebutuhan
                                    sistem
                                </li>
                                <li>
                                    Berkolaborasi dengan tim dalam proses pengembangan
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
