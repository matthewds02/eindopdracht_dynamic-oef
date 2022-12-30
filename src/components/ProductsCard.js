import React from 'react';
import PropTypes from "prop-types";
import {Col} from "react-bootstrap";

/**
 * Rendert de "Voeg toe aan winkelwagen" knop voor een product.
 * Als het product een prijs heeft, is de knop ingeschakeld.
 * Zo niet, dan is de knop uitgeschakeld en wordt "Niet beschikbaar" weergegeven.
 */
function RenderAddToCartButton({product = {}}) {
    // Controleert of het product een prijs heeft
    if (product.price) {
        return (
            <button className="add-to-cart-button btn btn-secondary btn-sm mt-3">
                Add to Cart
            </button>
        );
    }

    return (
        <button className="add-to-cart-button btn btn-secondary btn-sm mt-3" disabled>
            Not available
        </button>
    );
}

/**
 * Rendert een kaart voor een product
 */
function ProductCard({product = {}}) {
    // Haalt de naam van het product op zonder de bestandsextensie
    const name = product.name.split(".")[0];

    return (
        <Col xs={12} md={6} lg={4} key={product.id} className="product-card-parent text-center">
            <div className="product-card my-4 d-flex flex-column">
                <div className="product-image flex-grow-1">
                    <img src={`images/${product.name}`} alt={product.name} className="product-image"/>
                </div>
                <div className="product-info">
                    <h2 className="title">{name}</h2>
                    <p>{product.price}</p>
                    <RenderAddToCartButton product={product}/>
                </div>
            </div>
        </Col>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object,
};

export default ProductCard;
