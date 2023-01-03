import React from 'react';
import '../styles/products.css';
import ProductCard from '../components/ProductsCard';
import Section from "./Section";

function Headsets(props) {
    const {headsets, title, setCartHeadsets} = props;
    const headsetsArray = headsets ? Object.values(headsets) : [];

    return headsetsArray?.length > 0
        ? <Section title={title}>
            {headsetsArray.map(headset => <ProductCard key={headset.name} product={headset}
                                                       setCartHeadsets={setCartHeadsets}/>)}
        </Section>
        : <p>Your cart is empty</p>;
}


export default Headsets;