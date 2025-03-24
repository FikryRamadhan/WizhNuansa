import { useRef, useState } from "react";
import PopularItem from "../../hooks/PopularItems";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";

const PopularSection = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("wisata");

    const scroll = (direction: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: direction * 300, behavior: "smooth" });
        }
    };

    const categories = [...new Set(PopularItem.map(item => item.type))];
    const filteredItems = PopularItem.filter(item => item.type === selectedCategory).slice(0, 5);

    return (
        <div className="px-5 sm:px-10 md:px-20 py-5 mt-5 md:py-10">
            <h2 className="text-lg sm:text-2xl font-semibold mb-4 items-center" data-aos="fade-left">Populer di Wizh<span className="text-yellow-400">Nuansa!</span></h2>
            <div className="flex overflow-x-auto scrollbar-hide gap-2 mb-4 whitespace-nowrap">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        data-aos="zoom-in-left"
                        className={`px-3 py-2 rounded-full border ${selectedCategory === category ? 'bg-yellow-500 text-white' : 'text-gray-700'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            <div className="relative w-full mt-5">
                <button className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" onClick={() => scroll(-1)}>
                    <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
                </button>
                <div ref={scrollRef} className="flex space-x-4 overflow-x-auto scrollbar-hide p-2 w-full"  data-aos="zoom-in-up">
                    {filteredItems.map((item, index) => (
                        <NavLink to={`/trip/${item.slug}`} key={index}>
                            <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex-shrink-0 w-64 sm:w-56 md:w-64 lg:w-72">
                                <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md" />
                                <h3 className="text-sm font-bold mt-2">{item.title}</h3>
                                <p className="text-xs text-gray-500">{item.location}</p>
                                <p className="text-xs text-gray-500">{item.rating}</p>
                                {item.oldPrice && <p className="text-xs text-gray-400 line-through">{item.oldPrice}</p>}
                                <p className="text-md text-yellow-500 font-bold">{item.price}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
                <button className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" onClick={() => scroll(1)}>
                    <ChevronRightIcon className="h-6 w-6 text-gray-700" data-aos="zoom-in-left"/>
                </button>
            </div>
        </div>
    );
};

export default PopularSection;
