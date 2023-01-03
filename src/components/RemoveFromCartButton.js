import React from "react";
import 'react-toastify/dist/ReactToastify.css';

/**
 * Rendert de "Verwijder uit de winkelwagen" knop voor een product.
 */
function RenderRemoveFromCartButton(props) {
    const {product, setCartHeadsets, cartHeadsets} = props;

    return <>
        <button
            className="remove-button btn btn-secondary btn-sm mt-3"
            onClick={() => {
                setCartHeadsets(cartHeadsets.filter((p) => p.id !== product.id));
            }}
        >
            Remove from cart
        </button>
    </>
}

export default RenderRemoveFromCartButton;