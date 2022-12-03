import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../../../cartContext/CartContext";


const CartForm = ({ order, setOrder, data, setData, buyer, setName, setPhone, setMail, orderId }) => {
    const { cart, totalPrice, quantity } = useContext(CartContext);

    const handleName = (e) => setName(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleMail = (e) => setMail(e.target.value);

    const notify = () =>
        toast.success("Thanks for your purchase!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

    return (
        <div className="w-2/4 h-full mx-auto">
            <h1 className="text-black text-4xl py-2 dark:text-white">
                Fill out the form
            </h1>
            <div className="text-center grid grid-cols-1">
                <input
                    onChange={(e) => handleName(e)}
                    type="text"
                    name=""
                    id="name"
                    className=" my-2 py-4 px-2 mx-2 rounded-lg outline outline-orange-600 text-md overflow-hidden text-black font-bold"
                    placeholder="Name"
                />
                <input
                    onChange={(e) => handlePhone(e)}
                    type="tel"
                    name=""
                    id="number"
                    className=" my-2 py-4 px-2 mx-2 rounded-lg outline outline-orange-600 text-md overflow-hidden text-black font-bold"
                    placeholder="Phone"
                />
                <input
                    onChange={(e) => handleMail(e)}
                    type="email"
                    name=""
                    id="email"
                    className=" my-2 py-4 px-2 mx-2 rounded-lg outline outline-orange-600 text-md overflow-hidden text-black font-bold"
                    placeholder="E-Mail"
                />
            </div>
            <div className="mx-auto text-center my-4">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setOrder({
                            ...order,
                            buyer,
                            cart,
                            totalPrice,
                            quantity,
                            // orderId
                        });
                        setData(true);
                        notify()
                    }}
                    className={
                        data === true
                            ? "hidden"
                            : "text-black bg-gray-400 p-2 text-xl rounded-lg hover:bg-orange-600 duration-200"
                    }
                >
                    Confirm Data
                </button>
            </div>
        </div>
    );
};

export default CartForm;
