import React, { createContext, useState } from 'react';

// Create a new context
export const CartContext = createContext();

// Create a CartContextProvider component
export const CartContextProvider = ({ children }) => {
    // State to store cart items
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.productId !== itemId));
    };

    // Value object to be passed to consumers of the context
    const cartContextValue = {
        cartItems,
        addToCart,
        removeFromCart,
    };

    // Provide the context value to the children components
    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};