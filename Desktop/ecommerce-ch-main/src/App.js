import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemDetailContainer from "./components/itemList/item/ItemDetailContainer";
import CartContainer from "./components/cart/CartContainer";
import Footer from "./components/Footer";
import CartContextProvider from "./cartContext/CartContext";
import CartFormContainer from "./components/cart/cartForm/CartFormContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route path="/" element={<ItemListContainer />} />

                    <Route
                        path="/category/:category"
                        element={<ItemListContainer />}
                    />

                    <Route path="/item/:id" element={<ItemDetailContainer />} />

                    <Route path="/cart" element={<CartContainer />} />

                    <Route path="/form" element={<CartFormContainer />} />

                    <Route path="*" element={<h3>la pag no esta existe</h3>} />
                </Routes>

                <Footer />
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    
                />
                
            </BrowserRouter>
        </CartContextProvider>
        
    );
}

export default App;
