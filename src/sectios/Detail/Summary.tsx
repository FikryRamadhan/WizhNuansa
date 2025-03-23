import React from 'react'
import { useParams } from 'react-router-dom';
import { getDetailProduct, getDetilPaket } from '../../hooks/DetailProduct';

const Summary = () => {
    const { slug } = useParams<{ slug: string }>();
    const item = slug ? getDetailProduct(slug) ? getDetailProduct(slug) : getDetilPaket(slug) : undefined;
    return (
        <>
            <section className="py-10 bg-white text-gray-900">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Tentang {item?.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Tempat ini cocok untuk lepas penatmu. Kamu bisa seru-seruan di {item?.title} bersama teman, sahabat atau pasangan, bahkan keluarga kamu!
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                   <span className='font-semibold'>TNC</span> : {item?.tnc} <br />
                   <span className='font-semibold'>PAX</span> : {item?.pax} <br />
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                {item?.summary}
                </p>
            </section>
        </>
    )
}

export default Summary