import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import Itemlist from "./ItemList";
import { db } from "../../firebase";
import {
    collection,
    where,
    query,
    getDocs,
} from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { category } = useParams();

    const itemCollection = collection(db, "products");
    const getItems = getDocs(itemCollection);

    useEffect(() => {
        if (category) {
            const productFilter = query(
                itemCollection,
                where("category", "==", category)
            );
            const getItemsCategory = getDocs(productFilter)

            getItemsCategory
            .then((res)=>{
                const products = res.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setItems(products)
            })
            .catch((error)=>{
                console.log(error)
            })
        } else {
            getItems
                .then((res) => {
                    const products = res.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }));
                    setItems(products);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [category]);

    return (
        <section className="w-screen h-full bg-neutral-300 dark:bg-neutral-900">
            {items.length === 0 ? <Loading /> : <Itemlist items={items} />}
        </section>
    );
};

export default ItemListContainer;
