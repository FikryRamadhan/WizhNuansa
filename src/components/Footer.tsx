const Footer = () => {
    return (
        <footer className="bg-white py-10 px-5 md:px-20 items-center justify-center border-t border-0.5 border-gray-300 border-spacing-0.5">
            
            <div className="py-4 sm:hidden">
                <h2 className="text-2xl font-bold text-gray-950">Wizh<span className="text-yellow-400">Nuansa</span></h2>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                    <p className="flex items-center gap-2">📱 WhatsApp: <a href="tel:+6285811500888" className="text-blue-600">+62 858 1150 0888</a></p>
                    <p className="flex items-center gap-2">✉️ Email: <a href="mailto:cs@tiket.com" className="text-blue-600">cs@WizhNuansa.com</a></p>
                    <p className="flex items-center gap-2">🎧 Pusat Panggilan:</p>
                    <span className="block">Khusus Indonesia: <a href="tel:+628041500878" className="text-blue-600">+62 804 1500 878</a></span>
                </div>
            </div>


            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Logo dan Kontak */}
                <div className="hidden sm:block">
                    <h2 className="text-2xl font-bold text-gray-950">Wizh<span className="text-yellow-400">Nuansa</span></h2>
                    <div className="mt-4 space-y-2 text-sm text-gray-700">
                        <p className="flex items-center gap-2">📱 WhatsApp: <a href="tel:+6285811500888" className="text-blue-600">+62 858 1150 0888</a></p>
                        <p className="flex items-center gap-2">✉️ Email: <a href="mailto:cs@tiket.com" className="text-blue-600">cs@WizhNuansa.com</a></p>
                        <p className="flex items-center gap-2">🎧 Pusat Panggilan:</p>
                        <span className="block">Khusus Indonesia: <a href="tel:+628041500878" className="text-blue-600">+62 804 1500 878</a></span>
                    </div>
                </div>

                {/* Perusahaan */}
                <div>
                    <h3 className="font-semibold text-gray-950 mb-2">Perusahaan</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>Blog</li>
                        <li>Karier</li>
                        <li>Perlindungan</li>
                        <li>Cicilan</li>
                    </ul>
                </div>

                {/* Produk */}
                <div>
                    <h3 className="font-semibold text-gray-950 mb-2">Produk</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>Pesawat</li>
                        <li>Hotel</li>
                        <li>Kereta</li>
                        <li>Ferry</li>
                        <li>Event</li>
                    </ul>
                </div>

                {/* Dukungan */}
                <div>
                    <h3 className="font-semibold text-gray-950 mb-2">Dukungan</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>Pusat Bantuan</li>
                        <li>Kebijakan Privasi</li>
                        <li>Syarat & Ketentuan</li>
                        <li>Daftarkan Hotel Kamu</li>
                    </ul>
                </div>
            </div>

            {/* Aplikasi */}
            <div className="container mx-auto mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
                <p>Lebih murah di aplikasi</p>
                <div className="flex gap-2 mt-2 md:mt-0">
                    <img src="/appstore.webp" alt="Download on the App Store" className="w-32" />
                    <img src="/playstore.webp" alt="Get it on Google Play" className="w-32" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
