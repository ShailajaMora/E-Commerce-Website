import { Button } from "react-bootstrap";
import "./Card.css";

function Card(props) {
    return (
        <div className="product-card">
            <div>
                <img className="product-image" src={props.productImage} />
            </div>
            <div>
                <div>
                    <span className="name">{props.productName}</span>
                    <br />
                    <span className="price">Rs. {props.productPrice}/-</span>
                </div>
                {props.showCart && (
                    <div>
                        <Button onClick={() =>
                            props.addToCart({
                                productName: props.productName,
                                productImage: props.productImage,
                                productPrice: props.productPrice,
                            })}> Add To Cart</Button>
                    </div>

                )}
            </div>
        </div>
    );
}

export default Card;