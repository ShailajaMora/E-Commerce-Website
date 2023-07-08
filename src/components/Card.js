import { Button } from "react-bootstrap";
import { useState } from "react";
import "./Card.css";

function Card(props) {
    const handleAddToCart = () => {
        props.addToCart({
            productName: props.productName,
            productImage: props.productImage,
            productPrice: props.productPrice,
            productId: props.productId
        })
    };
    const handleRemoveFromCart = () => {
        props.removeFromCart(props.productId);
    }
    return (
        <div className="product-card">
            <div>
                <img className="product-image" src={props.productImage} />
            </div>
            <div>
                <div>
                    <div className="name my-2">{props.productName}</div>
                    <div className="price my-2">Rs. {props.productPrice}/-</div>
                </div>
                {props.showCart && (
                    <div>
                        {!props.isAdded && <Button onClick={handleAddToCart}> Add To Cart</Button>}
                        {props.isAdded && <Button onClick={handleRemoveFromCart}> Remove From Cart</Button>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;