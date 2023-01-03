import React from 'react';
import '../styles/products.css';
import ProductCard from '../components/ProductsCard';
import {Section} from "./Section";

export function Headsets(props) {
    const {headsets, title} = props;

    return headsets.length > 0
        ? <Section title={title}>
            {headsets.map(headset => <ProductCard key={headset.name} product={headset}/>)}
        </Section>
        : null;
}