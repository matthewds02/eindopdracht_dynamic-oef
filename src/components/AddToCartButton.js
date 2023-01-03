import React from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cuttedProductName from "../utilities/cuttedProductName";

/**
 * Rendert de "Voeg toe aan winkelwagen" knop voor een product.
 * Als het product een prijs heeft, is de knop ingeschakeld.
 * Zo niet, dan is de knop uitgeschakeld en wordt "Niet beschikbaar" weergegeven.
 */
function RenderAddToCartButton({product = {}}) {
    const notify = () => toast.success("Added to cart " + cuttedProductName(product.name));
    // Gebruik de ternary operator om te controleren of het product een prijs heeft
    return product.price ? (
        <button className="add-to-cart-button btn btn-secondary btn-sm mt-3" onClick={notify}>
            Add to Cart
        </button>
    ) : (
        <button className="add-to-cart-button btn btn-secondary btn-sm mt-3" disabled>
            Not available
        </button>
    );
}

export default RenderAddToCartButton;