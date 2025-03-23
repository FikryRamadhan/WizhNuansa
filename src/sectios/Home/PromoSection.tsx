// Ganti dengan path gambar yang sesuai
const PromoSection = () => {
    return (
        <>

            <section className="flex flex-col md:flex-row items-center gap-8 p-6 sm:px-10 sm:py-10 md:px-20 md:py-15">
                {/* Bagian Kiri - Teks */}
                <div className="md:w-1/2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                        Banjir Promo dan Benefit, Liburan Jadi Hemat!
                    </h2>
                    <div className="space-y-2 text-gray-700">
                        <div>
                            <h3 className="font-semibold text-md">Banyak Promo Spesial.</h3>
                            <p>
                                Banyak promo untuk tiket & hotel kesayanganmu. Dapatkan diskon harga terbaik agar bujet liburan kamu semakin hemat. Tidak ada alasan lagi untuk menunda liburan kamu.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-md">Benefit Tiket Rewards.</h3>
                            <p>
                                Dapatkan benefit Tiket Rewards berupa Tiket Points yang bisa kamu tukarkan dengan diskon. Juga berbagai benefit eksklusif sesuai produk yang kamu beli!
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-md">24/7 Customer Care.</h3>
                            <p>
                                Melalui pelayanan 24/7 Customer Care, kami akan selalu ada buat kamu. Dapatkan bantuan untuk pemesanan hotel dan tiketmu dengan pelayanan 24/7 Customer Care dari WizhNuansa.com.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bagian Kanan - Gambar */}
                <div className="md:w-1/2 flex justify-center">
                    <img src={'/promo/1.png'} alt="Promo Illustration" className="max-w-xs md:max-w-md w-full" />
                </div>
            </section>

            <section className="flex flex-col-reverse md:flex-row items-center gap-8 p-6 md:p-12">
                {/* Bagian Kiri - Gambar */}
                <div className="md:w-1/2 flex justify-center">
                    <img src={"/promo/2.png"} alt="Flight Promotion" className="max-w-xs md:max-w-md w-full" />
                </div>

                {/* Bagian Kanan - Teks */}
                <div className="md:w-1/2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                        Dapatkan Harga Tiket Pesawat Murah ke Destinasi Favorit Anda
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Ingin pesan tiket pesawat murah? Kini hanya dengan satu kali sentuhan jari, Anda bisa langsung pesan tiket pesawat murah di WizhNuansa.com. WizhNuansa.com adalah pionir online travel agent (OTA) di Indonesia yang selalu memberikan inovasi handal untuk mempermudah Anda ketika pesan tiket pesawat online.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        Cari tiket pesawat online di WizhNuansa.com ke ribuan destinasi penerbangan domestik maupun internasional di seluruh dunia. Anda bisa cek harga tiket pesawat online di WizhNuansa.com, sekaligus membandingkan jadwal pesawat secara langsung via online. Beli tiket online di WizhNuansa.com juga memberikan keuntungan lebih. Setiap kali melakukan transaksi, Anda bisa mendapatkan tiket Points yang setelah terkumpul bisa ditukar dengan hadiah atau diskon istimewa dari WizhNuansa.com.
                    </p>
                </div>
            </section>
        </>
    );
}

export default PromoSection
