import React from "react";
import { Link } from 'react-router-dom'

const Item = ({item}) => {
    const {id, image, title, price}= item
    return (
        <div
            key={id}
            className="w-[250px] mx-auto  text-center my-4 shadow-xl shadow-black"
        >
            <figure className="w-full border-b-2 border-black bg-neutral-300 dark:bg-neutral-700">
                <img src={image} alt={title} />
            </figure>
            <div className="bg-neutral-300 pb-2 dark:bg-neutral-700">
                <h3 className="text-2xl text-center font-signature overflow-hidden">
                    {title}
                </h3>
                <h4 className="text-2xl font-signature overflow-hidden">
                    ${price}
                </h4>
                <button className="bg-neutral-400 p-2 font-signature text-xl hover:bg-orange-600 shadow-lg shadow-black duration-200">
                    <Link to={"/item/" + id}>See More</Link>
                </button>
            </div>
        </div>
    );
};

export default Item;
