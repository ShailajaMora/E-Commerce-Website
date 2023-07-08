import React, { useContext } from "react";
import Card from "./Card";
import "./checkout.css";
import { Button } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext.js";

function Checkout() {
    const { cartItems } = useContext(CartContext);
    const calculatePrice = () => {
        let price = 0;
        for (let c of cartItems) {
            price = price + c.productPrice;
        }
        return price;
    };

    return (
        <div className="checkoutCont">

            <h2>Your Cart</h2>
            <div className="row justify-content-center">
                {cartItems.map((product) => (
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <Card
                            productName={product.productName}
                            productPrice={product.productPrice}
                            productImage={product.productImage}></Card>
                    </div>
                ))}
            </div>
            <hr></hr>
            <h2>Price</h2>
            <div className="my-2">Rs. {calculatePrice()}/-</div>
            <Button>Checkout</Button>
        </div>
    );
}

export default Checkout;
