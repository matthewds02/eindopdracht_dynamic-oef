import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import cuttedProductName from "../utilities/cuttedProductName";

/**
 * Rendert de "koop" knop voor alle producten in het winkelmandje.
 */
function BuyButton(props) {
    const {setCartHeadsets, cartHeadsets} = props;

    const notify = () => {
        const itemsList = cartHeadsets.map(item => cuttedProductName(item.name)).join(', ');
        toast.success(`Bought these items: ${itemsList}`);
        setCartHeadsets([]);
    }


    return <>
        <button
            className="buy-button btn btn-primary btn-sm mt-3"
            onClick={notify}
        >
            Buy items
        </button>
    </>
}

export default BuyButton;