import axios from "axios";
import Card from "./Card.js";
import "./home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const fetchProducts = async () => {
        const response = await axios.get("/database.json");
        setProducts(response.data);
    };
    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container">
            <h1> PRODUCTS </h1>
            <h2> Mobile Phones</h2>
            <div className="cart">
                <Link
                    to={{
                        pathname: "/checkout",
                        state: cart,
                    }}
                >
                    Cart
                </Link>
                <span className="cart-count">{cart.length}</span>
            </div>

            <div className="products">
                {products.map((product) => {
                    return <Card
                        showCart={true}
                        productName={product.productName}
                        productPrice={product.productPrice}
                        productImage={product.productImage}
                        addToCart={handleAddToCart}
                    />;
                })}
            </div>
        </div>
    );
}

export default Home;