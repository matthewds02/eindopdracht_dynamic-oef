import React from 'react';
import '../styles/products.css';
import Headsets from "../components/Headsets";

export function ApplePage(props) {
    const {airpods} = props;

    return <Headsets headsets={airpods} title="Apple Airpods"/>;
}