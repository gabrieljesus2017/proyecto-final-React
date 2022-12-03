import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <div className="w-screen h-screen bg-neutral-300 dark:bg-neutral-900">
            <div className="grid place-items-center h-full">
                <h2 className="text-center font-bold text-4xl py-4 align-middle text-black dark:text-white overflow-hidden">
                    The cart is empty. Go back to{" "}
                    <Link
                        className="border-b-2 hover:text-orange-600 hover:border-orange-600 duration-200"
                        to="/"
                    >
                        HOME
                    </Link>
                </h2>
            </div>
        </div>
    );
};

export default EmptyCart;
