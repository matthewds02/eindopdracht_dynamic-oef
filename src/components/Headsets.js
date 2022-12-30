import React from 'react';
import {Col} from 'react-bootstrap';
import '../styles/products.css';
import ProductCard from '../components/ProductsCard';
import {Section} from "./Section";

function Headset(props) {
    const {headset} = props;

    return <>
        <Col xs={12} md={6} lg={4} key={headset.id} className="product-card-parent text-center">
            <ProductCard product={headset}/>
        </Col>
    </>
}

export function Headsets(props) {
    const {headsets, title} = props;

    return <Section title={title}>
        {headsets.map(product => <Headset key={product.name} headset={product}/>)}
    </Section>;
}