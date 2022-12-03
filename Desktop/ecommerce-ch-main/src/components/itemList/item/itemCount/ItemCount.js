import React from "react";

const ItemCount = ({ counter, setCounter, stock, setSize}) => {
    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };

    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <div className="mx-auto">
            <h4 className="font-signature text-4xl py-2">
                Select the quantity:
            </h4>
            <div className="flex justify-center text-center my-4 ">
                <button
                    onClick={restar}
                    className="bg-neutral-400 mb-6 shadow-lg shadow-black text-black mx-2 px-2 hover:bg-orange-600 hover:shadow-xl hover:shadow-black duration-200"
                >
                    -
                </button>
                <h5 className="mx-4 font-signature mb-6 text-4xl overflow-hidden">
                    {counter}
                </h5>
                <button
                    onClick={sumar}
                    className="bg-neutral-400 mb-6 shadow-lg shadow-black text-black mx-2 px-2 hover:bg-orange-600 hover:shadow-xl hover:shadow-black duration-200"
                >
                    +
                </button>
            </div>
            <h4 className="text-xl font-mono pb-4 text-red-600">
                *Stock: {stock}
            </h4>
            <h4 className="font-signature text-4xl py-2">Select Size:</h4>
            <div className="flex justify-around text-center my-4 ">
                <button id="1"
                    onClick={() =>setSize("S")}
                    className="bg-neutral-400 px-2 rounded-lg shadow-lg shadow-black text-black my-4 active:bg-orange-500 hover:bg-orange-600 duration-200 hover:shadow-xl hover:shadow-black"
                >
                    S
                </button>
                <button id="2"
                    onClick={() => setSize("M")}
                    className="bg-neutral-400 px-2 rounded-lg shadow-lg shadow-black text-black my-4 active:bg-orange-500 hover:bg-orange-600 duration-200 hover:shadow-xl hover:shadow-black"
                >
                    M
                </button>
                <button id="3"
                    onClick={() => setSize("L")}
                    className="bg-neutral-400 px-2 rounded-lg shadow-lg shadow-black text-black my-4 active:bg-orange-500 hover:bg-orange-600 duration-200 hover:shadow-xl hover:shadow-black"
                >
                    L
                </button>
                <button id="4"
                    onClick={() => setSize("XL")}
                    className="bg-neutral-400 px-2 rounded-lg shadow-lg shadow-black text-black my-4 active:bg-orange-500 hover:bg-orange-600 duration-200 hover:shadow-xl hover:shadow-black"
                >
                    XL
                </button>
                <button id="5"
                    onClick={() => setSize("XXL")}
                    className="bg-neutral-400 px-2 rounded-lg shadow-lg shadow-black text-black my-4 active:bg-orange-500 hover:bg-orange-600 duration-200 hover:shadow-xl hover:shadow-black"
                >
                    XXL
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
