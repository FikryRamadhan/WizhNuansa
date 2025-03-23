import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../sectios/DetailProduct/Header";
import InfoProduct from "../sectios/DetailProduct/InfoProduct";
import Fasilitas from "../sectios/DetailProduct/Fasilitas";
import Review from "../sectios/DetailProduct/Review";
import { Link } from "react-router-dom";
import Breadcrumbs from "../sectios/DetailProduct/Breadcrumbs";

const DetailProduct: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="bg-white min-h-screen px-5 sm:px-10 md:px-20 py-20">
               <Breadcrumbs /> 
                <Header />
                <InfoProduct />
                <Fasilitas />
                <Review />

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

export default DetailProduct;