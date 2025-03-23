import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../sectios/Detail/Header";
import InfoProduct from "../sectios/Detail/InfoProduct";
import Fasilitas from "../sectios/Detail/Fasilitas";
import Review from "../sectios/Detail/Review";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../sectios/Detail/Breadcrumbs";
import Summary from "../sectios/Detail/Summary";
import { getDetailProduct, getDetilPaket } from "../hooks/DetailProduct";

const Detail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const item = slug ? getDetailProduct(slug) ? getDetailProduct(slug) : getDetilPaket(slug) : undefined;
    return (
        <>
            <Navbar />
            <div className="bg-white min-h-screen px-5 sm:px-10 md:px-20 py-20">
                <Breadcrumbs />
                <Header />
                <InfoProduct />
                <Fasilitas />
                <Review />

                {item?.summary ? (
                    <Summary />
                ) : undefined}

                <div className="fixed bottom-0 left-0 right-0 bg-transparent shadow-lg p-4 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center sm:justify-end sm:px-10">
                    <Link to={"/"} className="bg-yellow-400 cursor-pointer text-white px-6 py-3 rounded-lg text-lg font-bold w-full sm:w-auto hidden sm:block">Kembali</Link>
                    <button className="bg-yellow-400 cursor-pointer text-white px-6 py-3 rounded-lg text-lg font-bold w-full sm:w-auto">Pesan Sekarang</button>
                </div>
            </div>

            <div className="pb-10">
                <Footer />
            </div>
        </>
    );
};

export default Detail;