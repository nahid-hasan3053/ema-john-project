import React, { useEffect, useState } from "react";
import './Shop.css';
import Product from "../Product/Product";

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleClick = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return(
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product handleClick={handleClick} product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>cart</h1>
                <h1>Selected items: {cart.length}</h1>
            </div>
        </div>
    )
}

export default Shop;