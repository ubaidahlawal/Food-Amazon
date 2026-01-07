import {createContext, useState} from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [openCart, setOpenCart] = useState(false);
    const openCartModal = () => setOpenCart(true);
    const closeCartModal = () => setOpenCart(false);

    return (
        <CartContext.Provider value={{openCart, openCartModal, closeCartModal}}>
            {children}
        </CartContext.Provider>
    );
};