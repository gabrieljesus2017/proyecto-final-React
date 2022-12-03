import React from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ counter , setCounter, stock, size, setSize}) => {


    return (
        <ItemCount
            counter={counter}
            setCounter={setCounter}
            stock={stock}
            size={size}
            setSize={setSize}
        />
    );
};

export default ItemCountContainer;