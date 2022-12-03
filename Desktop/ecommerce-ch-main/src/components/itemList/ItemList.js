import React from "react";
import Item from "./item/Item";

const Itemlist = ( {items} ) => {
    return (
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto">
            {items.map((item) => {
                return <Item key={item.id} item={item} />;
            })}
        </main>
    );
};

export default Itemlist;
