import React, { useState, useEffect} from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useParams } from "react-router-dom";
import Loading from "../../Loading";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const [counter, setCounter] = useState(1);
    const [size, setSize] = useState("");
    const { id } = useParams();

    const itemRef = doc(db, "products", id);
    const getItem = getDoc(itemRef);
    useEffect(() => {
        getItem.then((res) => {
            const product = { ...res.data(), id: res.id };
            setItems(product);
        });
    }, [id]);

    return (
        <section className="w-screen h-full pb-6 bg-neutral-300 dark:bg-neutral-900">
            {items.length === 0 ? (
                <Loading />
            ) : (
                <ItemDetail
                    items={items}
                    setCounter={setCounter}
                    counter={counter}
                    setSize={setSize}
                    size={size}
                />
            )}
        </section>
    );
};

export default ItemDetailContainer;
