import React from 'react'
import { useParams } from 'react-router-dom';
import { getDetailProduct, getDetilPaket } from '../../hooks/DetailProduct';

const InfoProduct = () => {
    const { slug } = useParams<{ slug: string }>();
    const item = slug ? getDetailProduct(slug) ? getDetailProduct(slug) : getDetilPaket(slug) : undefined;
    return (
        <div className="bg-white rounded-lg pb-2 mt-6 grid grid-cols-2 md:grid-cols-2 gap-4 ">
            <div>
                <h1 className="text-xl sm:text-2xl font-semibold sm:font-bold">{item?.title}</h1>
                <p className="text-gray-600 text-sm sm:text-base">{item?.location}</p>
                <p className="text-yellow-500 font-semibold text-sm sm:text-base">⭐ {item?.rating}{item.riview ? "/5 " + item.riview : ""}</p>
            </div>
            <div className="text-right">
                {item?.oldPrice && <p className="text-xs text-gray-400 line-through">{item?.oldPrice && ""}</p>}
                <p className="text-lg sm:text-2xl font-bold text-yellow-500">{item?.price.toLocaleString ? item.price.toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0, maximumFractionDigits: 0 }) : item?.price }</p>
            </div>
        </div>
    )
}

export default InfoProduct