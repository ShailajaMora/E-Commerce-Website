import React, { useState } from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./checkout.css";

function Checkout() {
    const location = useLocation();
    const [cart, setCart] = useState(location.state);
    const calculatePrice = () => {
        let price = 0;
        for (let c of cart) {
            price = price + c.productPrice;
        }
        return price;
    };

    return (
        <div className="checkoutCont">
            <h1>Checkout</h1>

            <h2>Your Cart</h2>
            {cart.map((product) => (
                <Card
                    productName={product.productName}
                    productPrice={product.productPrice}
                    productImage={product.productImage}
                />
            ))}

            <h2>Price</h2>
            Rs. {calculatePrice()}/-

            <br />
            <button className="checkout">Checkout</button>
        </div>
    );
}

export default Checkout;
