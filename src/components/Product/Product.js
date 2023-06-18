import React from "react";
import './Product.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Product = ({product, handleClick}) => {

    const {img, name, price, ratings} = product;

    return(
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>price: ${price}</p>
                <p>ratings: {ratings}</p>
            </div>
            <button onClick={()=>handleClick(product)} className="btn-cart">
                <p className="btn-text">Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
            </button>
        </div>
    )
}

export default Product;