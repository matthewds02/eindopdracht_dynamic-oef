import React from 'react';
import PropTypes from "prop-types";

function ProductCard(props) {
    const {product} = props;

    if (product.price) {

    }

    // Extract the name of the product without the file extension
    const name = product.name.split('.')[0];

    return (
        //<Col xs={12} md={6} lg={4} key={product.id} className="product-card-parent text-center">
        <div className="product-card my-4 d-flex flex-column">
            <div className="product-image flex-grow-1">
                <img src={`images/${product.name}`} alt={product.name} className="product-image"/>
            </div>
            <div className="product-info">
                <h2 className="title">{name}</h2>
                <p>{product.price}</p>
                {product.price ? (
                    <button className="add-to-cart-button btn btn-secondary btn-sm mt-3">
                        Add to Cart
                    </button>
                ) : (
                    <button className="add-to-cart-button btn btn-secondary btn-sm mt-3" disabled>
                        Not available
                    </button>
                )}
            </div>
        </div>
        //</Col>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
}