import axios from "axios";
import Card from "./Card.js";
import "./home.css";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CartContext } from "../contexts/CartContext.js";

function Home() {
    const [products, setProducts] = useState([]);
    const { addToCart, cartItems, removeFromCart } = useContext(CartContext);
    const fetchProducts = async () => {
        const response = await axios.get("/database.json");
        setProducts(response.data.map(product => {
            if (cartItems.map(cartItem => cartItem.productId).includes(product.productId)) {
                return { ...product, isAdded: true }
            }
            return product;
        }));
    };
    const handleAddToCart = (selectedProduct) => {
        setProducts(products.map(product => {
            if (product.productId === selectedProduct.productId) {
                return { ...product, isAdded: true }
            }
            return product;
        }));
        addToCart(selectedProduct);
    };
    const handleRemoveFromCart = (productId) => {
        setProducts(products.map(product => {
            if (product.productId === productId) {
                return { ...product, isAdded: false }
            }
            return product;
        }));
        removeFromCart(productId);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container">
            <h2> Mobile Phones</h2>
            <div className="cart d-flex justify-content-center align-items-center">
                <Link
                    to={{
                        pathname: "/checkout"
                    }}
                >
                    <i class="bi bi-cart-fill"></i>
                </Link>
                <span className="cart-count">{cartItems.length}</span>
            </div>
            <div className="products row">
                {products.map((product) => {
                    return <div className="col-xs-12 col-sm-6 col-md-4">
                        <Card
                            showCart={true}
                            productName={product.productName}
                            productPrice={product.productPrice}
                            productImage={product.productImage}
                            productId={product.productId}
                            isAdded={product.isAdded}
                            addToCart={handleAddToCart}
                            removeFromCart={handleRemoveFromCart}
                        />
                    </div>;
                })}
            </div>
        </div>
    );
}

export default Home;