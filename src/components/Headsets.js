import React from 'react';
import '../styles/products.css';
import ProductCard from '../components/ProductsCard';
import {Section} from "./Section";

function Headset(props) {
    const {headset} = props;

    return <ProductCard product={headset}/>;
}

export function Headsets(props) {
    const {headsets, title} = props;

    return <Section title={title}>
        {headsets.map(product => <Headset key={product.name} headset={product}/>)}
    </Section>;
}