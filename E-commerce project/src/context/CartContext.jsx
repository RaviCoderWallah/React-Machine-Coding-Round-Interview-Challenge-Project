import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        return JSON.parse(localStorage.getItem("cartItems")) || []
    });

    const addToCart = ({ productID, price, title, quantity, thumbnail }) => {
        const existingId = cartItems.find((cart) => cart.id == productID);
        if (existingId) return;
        setCartItems((prev) => [...prev, {
            id: productID,
            price: price,
            title: title,
            productQuantity: quantity,
            image: thumbnail
        }]);
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems])

    const updateToCart = (id, updateQuantity) => {
        setCartItems((prevCart) => prevCart.map((cart) => cart.id == id ? { ...cart, productQuantity: updateQuantity } : cart));
    }

    const removeToCart = (id) => {
        const removeCart = cartItems.filter(item => item.id !== id);
        setCartItems(removeCart);
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const totalPrice = () => {
        return cartItems.reduce((sum, item) => sum + (item.price * item.productQuantity), 0);
    }

    const totalQuantity = () => {
        return cartItems.reduce((sum, item) => sum + item.productQuantity, 0);
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