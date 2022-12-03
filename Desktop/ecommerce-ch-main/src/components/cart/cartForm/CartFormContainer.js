import React,{ useState, useContext, } from "react";
import CartForm from "./CartForm";
import BuyTicket from "../ticket/BuyTicket";
import { CartContext } from "../../../cartContext/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { DateTime } from "luxon";
import { db } from "../../../firebase";

const CartFormContainer = () => {
    
    const [data, setData] = useState(false)
    const [confirmBuy, setConfirmBuy] = useState(false);
    const [order, setOrder] = useState({});
    const {setCart} = useContext(CartContext)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [mail, setMail] = useState("");
    // const [tiketFinal, setTiketFinal] = useState({})

    const ordersCollection = collection(db, "orders")

    const buyer = {
        name,
        mail,
        phone,
        date: DateTime.now().toLocaleString(DateTime.DATETIME_MED),
    };

    const addToFirestore = (order) => {
        addDoc(ordersCollection, order).then(({id})=> setOrder({...order, id: id}) )
    }

    return (
        <div
            className={
                confirmBuy === false
                    ? "w-screen h-screen bg-neutral-300 dark:bg-neutral-900"
                    : "w-screen h-full bg-neutral-300 dark:bg-neutral-900"
            }
        >
            <div>
                {confirmBuy === false ? (
                    <CartForm
                        order={order}
                        setOrder={setOrder}
                        data={data}
                        setData={setData}
                        buyer={buyer}
                        setName={setName}
                        setPhone={setPhone}
                        setMail={setMail}
                    />
                ) : (
                    <BuyTicket order={order} />
                )}
            </div>
            <div className="mx-auto text-center my-4">
                {data === false ? (
                    ""
                ) : (
                    <button
                        onClick={() => {
                            setConfirmBuy(true);
                            setCart([]);
                            addToFirestore(order)
                        }}
                        className={
                            confirmBuy === true
                                ? "hidden"
                                : "text-black bg-gray-400 p-2 text-xl rounded-lg hover:bg-orange-600 duration-200"
                        }
                    >
                        See Ticket
                    </button>
                )}
            </div>
        </div>
    );
};

export default CartFormContainer;
