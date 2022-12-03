import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(cart.reduce((acc, item) => (acc += item.quantity) , 0));
        setTotalPrice(
            cart.reduce((acc, item) => (acc += item.price * item.quantity), 0)
        );
    }, [cart]);

    const addItem = (item) => {
        const isInCart = cart.find((prod) => prod.id === item.id);
        if (isInCart) {
            const carritoActualizado = cart.map((prod) => {
                if (prod.id === item.id) {
                    return prod.quantity + item.quantity >= item.stock
                        ? { ...prod, quantity: item.stock }
                        : { ...prod, quantity: prod.quantity + item.quantity };
                } else {
                    return prod;
                }
            });
            setCart(carritoActualizado);
        } else {
            setCart([...cart, item]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter((Item) => Item.id !== id));
    };
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addItem,
                removeItem,
                clearCart,
                totalPrice,
                quantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
