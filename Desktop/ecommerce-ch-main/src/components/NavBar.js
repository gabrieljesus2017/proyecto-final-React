import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <header className="w-screen h-[80px] overflow-x-hidden bg-black grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-4 items-center py-3 px-4">
            <div>
                <Link to="/">
                    <h2 className="text-white font-signature text-3xl overflow-hidden">
                        <span className="text-orange-600 text-5xl">Best</span>{" "}
                        Commerce
                    </h2>
                </Link>
            </div>

            <div className="hidden xl:block"></div>

            <nav className="mx-auto hidden sm:block xl:justify-self-end">
                <ul className="flex justify-between">
                    <li className="px-2 li-class">
                        <NavLink to="/">
                            <p className="text-white font-serif text-lg  hover:text-orange-600 duration-200">
                                All
                            </p>
                        </NavLink>
                    </li>

                    <li className="px-2 li-class">
                        <NavLink
                            to="/category/hoodies"
                            className="text-white font-serif text-lg  hover:text-orange-600 duration-200"
                        >
                            <p>Hoodies</p>
                        </NavLink>
                    </li>

                    <li className="px-2 li-class">
                        <NavLink
                            to="/category/pants"
                            className="text-white font-serif text-lg  hover:text-orange-600 duration-200"
                        >
                            <p>Pants</p>
                        </NavLink>
                    </li>

                    <li className="px-2 li-class">
                        <NavLink
                            to="/category/shoes"
                            className="text-white font-serif text-lg  hover:text-orange-600 duration-200"
                        >
                            <p>Shoes</p>
                        </NavLink>
                    </li>
                    <li className="px-2 li-class">
                        <NavLink
                            to="/category/jackets"
                            className="text-white font-serif text-lg  hover:text-orange-600 duration-200"
                        >
                            <p>Jackets</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="hidden xl:block "></div>

            <div className="justify-self-center">
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>
        </header>
    );
};

export default NavBar;
