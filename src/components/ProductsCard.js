import React from 'react';
import PropTypes from "prop-types";
import {Col} from "react-bootstrap";
import RenderAddToCartButton from "./AddToCartButton";
import cuttedProductName from "../utilities/cuttedProductName";

/**
 * Rendert een kaart voor een product
 */
function ProductCard(props) {
    const {product, setCartHeadsets, cartHeadsets} = props;
    return (
        <Col xs={12} md={6} lg={4} key={product.id} className="product-card-parent text-center">
            <div className="product-card my-4 d-flex flex-column">
                <div className="product-image flex-grow-1">
                    <img src={`images/${product.name}`} alt={product.name} className="product-image"/>
                </div>
                <div className="product-info">
                    <h2 className="title">{cuttedProductName(product.name)}</h2>
                    <p>{product.price}</p>
                    {cartHeadsets ? (<button
                        className="remove-button btn btn-secondary btn-sm mt-3"
                        onClick={() => {
                            setCartHeadsets(cartHeadsets.filter((p) => p.id !== product.id));
                        }}
                    >
                        Remove from cart
                    </button>) : (<RenderAddToCartButton product={product} setCartHeadsets={setCartHeadsets}/>)}
                </div>
            </div>
        </Col>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object,
};

export default ProductCard;
