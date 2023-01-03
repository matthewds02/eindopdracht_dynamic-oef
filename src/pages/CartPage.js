import React from 'react';
import '../styles/products.css';
import Section from "../components/Section";
import ProductCard from "../components/ProductsCard";

function CartPage(props) {
    const {cartHeadsets, setCartHeadsets} = props;
    return cartHeadsets?.length > 0
        ? <Section title={"Cart"}>
            {cartHeadsets.map(headset => <ProductCard key={headset.name} product={headset}
                                                      setCartHeadsets={setCartHeadsets} cartHeadsets={cartHeadsets}/>)}
        </Section>
        : <p>Your cart is empty</p>;
}

export default CartPage;