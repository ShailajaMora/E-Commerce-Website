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
            <div className="cart d-flex justify-content-center align-items-center">
                <Link
                    to={{
                        pathname: "/checkout",
                        state: cart,
                    }}
                >
                    <i class="bi bi-cart-fill"></i>
                </Link>
                <span className="cart-count">{cart.length}</span>
            </div>
            <div className="products row">
                {products.map((product) => {
                    return <div className="col-xs-12 col-sm-6 col-md-4">
                        <Card
                            showCart={true}
                            productName={product.productName}
                            productPrice={product.productPrice}
                            productImage={product.productImage}
                            addToCart={handleAddToCart}
                        />
                    </div>;
                })}
            </div>
        </div>
    );
}

export default Home;