import React from 'react'
import { useParams } from 'react-router-dom';
import { getDetailProduct, getDetilPaket } from '../../hooks/DetailProduct';

const Header = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getDetailProduct(slug) ? getDetailProduct(slug) : getDetilPaket(slug) : undefined;


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
        <div className="md:col-span-2">
          <img src={item?.image} data-aos="zoom-in-up" alt="Main Resort" className="w-full h-60 sm:h-80 md:h-96  rounded-lg object-center" />
        </div>
        <div className="grid grid-cols-4 overflow-x-auto sm:grid-cols-2 gap-2">
          <img data-aos="zoom-in-left" src={item?.image} alt="Side 1" className="w-full h-28 sm:h-36 md:h-46  rounded-lg object-center" />
          <img data-aos="zoom-in-left" src={item?.image} alt="Side 2" className="w-full h-28 sm:h-36 md:h-46  rounded-lg object-center" />
          <img data-aos="zoom-in-left" src={item?.image} alt="Side 3" className="w-full h-28 sm:h-36 md:h-46  rounded-lg object-center" />
          <img data-aos="zoom-in-left" src={item?.image} alt="Side 4" className="w-full h-28 sm:h-36 md:h-46  rounded-lg object-center" />
        </div>
      </div>
    </>
  )
}

export default Header