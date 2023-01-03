import React from 'react';
import '../styles/products.css';
import ProductCard from '../components/ProductsCard';
import Section from "./Section";

function Headsets(props) {
    const {headsets, title, setCart} = props;
    const headsetsArray = headsets ? Object.values(headsets) : [];

    return headsetsArray?.length > 0
        ? <Section title={title}>
            {headsetsArray.map(headset => <ProductCard key={headset.name} product={headset} setCart={setCart}/>)}
        </Section>
        : null;
}


export default Headsets;