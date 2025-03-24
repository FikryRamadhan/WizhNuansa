import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/").filter((segment) => segment);
    
    return (
        <nav className="text-sm py-2 sm:hidden" data-aos="zoom-in-right">
            <ul className="flex flex-wrap items-center text-gray-600">
                <li>
                    <Link to="/" className="text-yellow-600 hover:underline">
                        Home
                    </Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathSegments.length - 1;

                    return (
                        <li key={url} className="flex items-center">
                            <span className="mx-2">/</span>
                            {isLast ? (
                                <span className="text-gray-400">{decodeURIComponent(segment)}</span>
                            ) : (
                                <Link to={""} className="text-yellow-600 hover:underline">
                                    {decodeURIComponent(segment)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Breadcrumbs