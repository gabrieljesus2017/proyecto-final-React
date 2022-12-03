import React from "react";
import { Link } from "react-router-dom";

const BuyTicket = ({ order }) => {

    return (
        <>
            <h2 className="text-center text-5xl font-signature py-2 dark:text-white overflow-hidden">
                Thanks for your purchase!
            </h2>
            <div className="w-1/3 h-full mx-auto bg-neutral-200 my-2 border-2 border-black">
                <h3 className="text-center text-5xl border-b-2 border-black py-2">
                    TICKET
                </h3>
                <div className="border-b-2 border-black py-2">
                    <p className=" ml-2 text-2xl py-1">
                        Purchase ID: {order.id}
                    </p>
                    <p className=" ml-2 text-2xl py-1">
                        Name: {order.buyer.name}
                    </p>
                    <p className=" ml-2 text-2xl py-1">
                        Email: {order.buyer.mail}
                    </p>
                    <p className=" ml-2 text-2xl py-1">
                        Phone: {order.buyer.phone}
                    </p>
                    <p className=" ml-2 text-2xl py-1">{order.buyer.date}</p>
                </div>
                <div className="border-b-2 border-black py-2">
                    <h3 className="ml-2 text-2xl">Items:</h3>
                    <ul className="list-disc list-inside">
                        {order.cart.map((item) => (
                            <li key={item.id} className="ml-4 text-left">
                                {item.title}{" "}
                                <span className="ml-4">
                                    Quantity: {item.quantity}
                                </span>{" "}
                                <span className="ml-4">
                                    Total: {item.price * item.quantity}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="py-2 text-center">
                    <p className="text-xl py-1">
                        Total Items: {order.quantity}
                    </p>
                    <p className="text-3xl py-1">
                        Total Price: ${order.totalPrice}
                    </p>
                </div>
            </div>
            <div className="mx-auto text-center">
                <Link to="/">
                    <button className="bg-neutral-400 p-2 font-signature text-2xl rounded-lg hover:bg-orange-600 duration-200">
                        Return To Homepage
                    </button>
                </Link>
            </div>
        </>
    );
};

export default BuyTicket;
