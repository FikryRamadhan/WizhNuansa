import React from 'react'
import { getDetailProduct } from '../../hooks/DetailProduct';
import { useParams } from 'react-router-dom';

const Review = () => {
    const { slug } = useParams<{ slug: string }>();
    const item = slug ? getDetailProduct(slug) : undefined;

    return (
        <>
            <div className="mt-10">
                <h2 className="text-xl sm:text-2xl font-semibold sm:font-bold">Review</h2>
                <p className="text-md sm:text-lg text-gray-600">{item?.rating}</p>
                <div className="flex overflow-x-auto space-x-4 mt-4 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:space-x-0 sm:gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md min-w-[300px] sm:min-w-0">
                        <p className="font-bold">5,0/5 - Hashfiyandi Pratama Putra K</p>
                        <p className="text-sm text-gray-500">5 Mar 2025 - Trip Keluarga</p>
                        <p className="mt-2">Kualitas layanan terbaik. Menu lezat dan oke banget. Layanan concierge yang informatif. Staf yang tepat waktu dan terlatih baik.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md min-w-[300px] sm:min-w-0">
                        <p className="font-bold">5,0/5 - Bobby Faizal Nasution</p>
                        <p className="text-sm text-gray-500">11 Feb 2025 - Trip Keluarga</p>
                        <p className="mt-2">Tempat paling bagus di Anyer.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md min-w-[300px] sm:min-w-0">
                        <p className="font-bold">5,0/5 - Pritania Dwitasari</p>
                        <p className="text-sm text-gray-500">23 Jan 2025 - Trip Pasangan</p>
                        <p className="mt-2">Menyenangkan nginep di sini, pelayanannya juga ramah & cukup bersih untuk glamping & area sekitarnya.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review