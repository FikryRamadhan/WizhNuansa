import React from 'react'
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../../hooks/DetailProduct';

const Fasilitas = () => {
    const { slug } = useParams<{ slug: string }>();
    const item = slug ? getDetailProduct(slug) : undefined;
    console.log();

    return (
        <>
            <div className="pt-10 border-t border-gray-300">
                <h2 className="text-xl sm:text-2xl font-semibold sm:font-bold">Fasilitas Populer</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 text-gray-700">
                    {item?.fasilitas.map((data, index) => (
                        <p key={index}>🎫 {data}</p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Fasilitas