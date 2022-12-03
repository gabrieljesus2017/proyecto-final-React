import React, { useContext } from "react";
import { CartContext } from "../../cartContext/CartContext";
import Cart from "./Cart";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
    const { cart, removeItem, clearCart, quantity, totalPrice } =
        useContext(CartContext);
    return (
        <>
            {cart.length === 0 ? (
                <EmptyCart />
            ) : (
                <Cart
                    cart={cart}
                    removeItem={removeItem}
                    clearCart={clearCart}
                    quantity={quantity}
                    totalPrice={totalPrice}
                />
            )}
        </>
    );
};

export default CartContainer;
