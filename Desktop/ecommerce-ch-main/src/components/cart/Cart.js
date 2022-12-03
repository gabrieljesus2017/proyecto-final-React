import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = ({ cart, removeItem, clearCart, totalPrice, quantity }) => {

    const warning = () =>
        toast.error("Removed product!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        const warningEmptyCart = () =>
            toast.error("The cart is empty!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

    return (
        <div
            className={
                cart.length <= 1
                    ? "w-screen h-screen bg-neutral-300 text-black dark:bg-neutral-900 dark:text-white"
                    : "w-screen h-full bg-neutral-300 text-black dark:bg-neutral-900 dark:text-white"
            }
        >
            {cart.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="w-2/4 mx-auto my-2 py-2 border-2 border-black bg-neutral-500 dark:bg-neutral-700 shadow-xl shadow-black/50"
                    >
                        <div className="flex justify-center">
                            <figure>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-28"
                                />
                            </figure>
                            <h3 className="mx-auto self-center">
                                Name: {item.title}
                            </h3>
                            <h3 className="mx-auto self-center">
                                Size: {item.size}
                            </h3>
                            <h3 className="mx-auto self-center">
                                Quantity: {item.quantity}
                            </h3>
                            <h3 className="mx-auto self-center">
                                Price: ${item.price * item.quantity}
                            </h3>
                        </div>
                        <div className="mx-auto text-center">
                            <button
                                onClick={() => {
                                    removeItem(item.id);
                                    warning();
                                }}
                                className="text-white dark:text-black bg-neutral-700 dark:bg-gray-400 rounded-lg p-2 hover:bg-red-600 duration-200"
                            >
                                Delete Product
                            </button>
                        </div>
                    </div>
                );
            })}
            <div className="w-2/4 py-4 mx-auto text-center">
                <button
                    onClick={() => {
                        clearCart();
                        warningEmptyCart();
                    }}
                    className="text-white dark:text-black bg-neutral-700 dark:bg-gray-400 rounded-lg p-2 hover:bg-red-600 duration-200"
                >
                    Empty Cart
                </button>
            </div>
            <div className="w-2/4 py-4 mx-auto flex justify-around">
                <h2 className="font-signature text-4xl overflow-hidden">
                    Products Quantity: {quantity}
                </h2>
                <h2 className="font-signature text-4xl overflow-hidden">
                    Total Price: ${totalPrice}
                </h2>
            </div>
            <div className="w-2/4 py-4 mx-auto text-center">
                <Link
                    to="/form"
                    className="font-semibold text-white dark:text-black bg-neutral-700 dark:bg-gray-400 rounded-lg p-4
                    hover:bg-green-700 hover:text-black duration-200"
                >
                    Confirm Purchase
                </Link>
            </div>
        </div>
    );
};

export default Cart;
