import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = ({ productID, price, title, quantity, thumbnail }) => {
        setCartItems((prev) => [...prev, {
            id: productID,
            price: price,
            title: title,
            productQuantity: quantity,
            image: thumbnail
        }])
    }

    const updateToCart = () => {

    }

    const removeToCart = () => {

    }

    const clearCart = () => {
        setCartItems([]);
    }

    const totalPrice = () => {

    }

    const totalQuantity = () => {

    }

    const contextValue = {
        cartItems,
        addToCart,
        removeToCart,
        updateToCart,
        clearCart,
        totalPrice,
        totalQuantity
    }

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}