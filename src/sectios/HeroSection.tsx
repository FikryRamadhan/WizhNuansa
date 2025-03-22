import React from 'react'
import { HeroCategory } from '../interfaces/Category'
import { CalendarIcon, HomeIcon, PaperAirplaneIcon, TicketIcon } from '@heroicons/react/16/solid'
import headImage from '../../public/images/head.jpg';

const categories: HeroCategory[] = [
  { name: "Pesawat", icon: PaperAirplaneIcon },
  { name: "Hotel", icon: HomeIcon },
  { name: "Wisata", icon: TicketIcon },
  { name: "Kereta Api", icon: TicketIcon },
  { name: "Ferry", icon: TicketIcon },
  { name: "Event", icon: CalendarIcon },
]

const HeroSection = () => {
  return (
    <>
      <div className="relative h-72 sm:h-[500px] md:h-[500px] w-full bg-cover bg-center bg-[url('/images/head.jpg')]">
        <div className="absolute inset-0 bg-opacity-40 mt-20 flex flex-col items-center justify-center text-center text-white p-6">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 text-gray-50">Hai kamu, <span className="">mau ke mana?</span></h1>
          <p className="mb-6 text-lg sm:text-xl text-gray-100">Satu aplikasi untuk kebutuhan liburanmu.</p>

          {/* Input Pencarian untuk Mobile */}
          <div className="w-full max-w-md mb-6 sm:hidden">
            <div className="relative flex items-center bg-white rounded-full px-3 py-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.817-4.817A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input type="text" placeholder="Cari disini" className="ml-3 w-full outline-none text-gray-700 placeholder-gray-400" />
            </div>
          </div>

          {/* Kategori hanya muncul di layar besar */}
          <div className="hidden sm:grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {categories.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <item.icon className="h-12 w-12 text-yellow-400 bg-white p-2 rounded-full shadow-lg" />
                <p className="mt-2 text-sm font-semibold">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 sm:hidden gap-3 mt-5">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="h-8 w-8 sm:h-12 sm:w-12 text-yellow-400 bg-white p-2 rounded-full shadow-lg" />
            <p className="mt-2 text-sm font-semibold">{item.name}</p>
          </div>
        ))}
      </div>

    </>
  )
}

export default HeroSection