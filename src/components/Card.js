import "./Card.css";
function Card(props) {
    return (
        <div>
            <img src={props.productImage} />
            <div>
                <div>
                    <span className="name">{props.productName}</span>
                    <br />
                    <span className="price">Rs. {props.productPrice}/-</span>
                </div>
                {props.showCart && (
                    <div>
                        <button className="addToCart" onClick={() =>
                            props.addToCart({
                                productName: props.productName,
                                productImage: props.productImage,
                                productPrice: props.productPrice,
                            })}> Add To Cart</button>
                    </div>

                )}
            </div>
        </div>
    );
}

export default Card;