import React from 'react';
import '../styles/products.css';
import ProductCard from '../components/ProductsCard';
import Section from "./Section";
import {ToastContainer} from "react-toastify";

function Headsets(props) {
    const {headsets, title} = props;

    return headsets.length > 0
        ? <Section title={title}>
            {headsets.map(headset => <ProductCard key={headset.name} product={headset}/>)}
            <ToastContainer/>
        </Section>
        : null;
}

export default Headsets;