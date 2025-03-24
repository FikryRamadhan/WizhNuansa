import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/16/solid';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const [bgColor, setBgColor] = useState("bg-transparent");
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setBgColor("bg-white  shadow-md");
            } else {
                setBgColor("bg-transparent");
            }
        };
    
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Untuk memastikan efek langsung berjalan
    
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <nav className={`fixed  top-0 left-0 w-full z-50 px-5 sm:px-5 md:px-20 transition-all duration-300 ${bgColor}`}>

            {/* Desktop and Mobile Layout */}
            <div className="">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <h1 className="text-xl font-bold text-gray-900" data-aos="fade-down">Wizh<span className='text-yellow-400'>Nuansa</span></h1>
                        </div>
                        <div className="flex-1 lg:ml-5" data-aos="fade-down">
                            <div className="relative sm:flex items-center bg-gray-100 rounded-full px-3 py-1 hidden shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.817-4.817A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                                <input type="text" placeholder="Cari disini" className="ml-3 w-full outline-none text-gray-700 placeholder-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Middle Section - Navigation Links (visible only on lg screens) */}
                    <div className="hidden lg:flex items-center justify-center flex-1 mx-20">

                    </div>

                    {/* Right Section - Icons (visible on all screens) */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-100 hover:text-gray-100"></button>
                        <div className="flex items-center space-x-4" data-aos="fade-down">
                            <div className="flex items-center space-x-4">
                                {/* Button Daftar */}
                                <button className="text-gray-950 hidden bg-gray-100 hover:bg-gray-300 px-4 md:flex py-2 border border-gray-100 rounded-lg">
                                    Masuk
                                </button>

                                {/* Sign In Button (Hidden on Mobile) */}
                                <button className="text-white py-2 px-4 rounded-lg bg-yellow-400 hover:bg-yellow-500 hidden md:flex items-center space-x-1">
                                    Daftar
                                </button>
                            </div>

                        </div>


                        {/* Hamburger Menu Button (visible only on smaller screens) */}
                        <button onClick={toggleMenu} data-aos="fade-down" className="md:hidden text-gray-950 hover:text-gray-900 focus:outline-none">
                            {isMenuOpen ? (
                                // X Icon
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Menu Icon
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Modal (fixed on right side) */}
            {isMenuOpen && (
                <>
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-black opacity-10 z-40 lg:hidden" onClick={toggleMenu}></div>

                    {/* Modal Menu */}
                    <div className="fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
                        <div className="p-5">
                            <div className="flex justify-between items-center mb-6">
                                <button onClick={toggleMenu} className="text-gray-950 hover:text-gray-900 focus:outline-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <NavLink to={""} className="text-gray-900 hover:text-gray-900 py-2 font-medium border-b border-gray-900">
                                    Daftar
                                </NavLink>
                                <NavLink to={""} className="text-gray-900 hover:text-gray-900 py-2 font-medium border-b border-gray-900">
                                    Login
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
}
