import React, { useContext} from "react";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../cartContext/CartContext";



const CartWidget = () => {
    const { quantity } = useContext(CartContext);
    
    return (
        <div className="flex">
            <BsCart3
                className="text-white font-serif text-lg hover:text-orange-600 duration-200"
                size={25}
            />
            <p className="text-white pl-2">{quantity === 0 ? "" : quantity}</p>
        </div>
    );
};

export default CartWidget;
