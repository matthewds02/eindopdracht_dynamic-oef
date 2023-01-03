import React from 'react';
import PropTypes from "prop-types";
import {Col} from "react-bootstrap";
import RenderAddToCartButton from "./AddToCartButton";
import cuttedProductName from "../utilities/cuttedProductName";
import RenderRemoveFromCartButton from "./RemoveFromCartButton";

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
                    {cartHeadsets ?
                        (<RenderRemoveFromCartButton product={product} setCartHeadsets={setCartHeadsets}
                                                     cartHeadsets={cartHeadsets}/>)
                        :
                        (<RenderAddToCartButton product={product} setCartHeadsets={setCartHeadsets}/>)}
                </div>
            </div>
        </Col>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object,
};

export default ProductCard;
