import React from 'react';
import '../styles/products.css';
import {Headsets} from "../components/Headsets";

export function SamsungPage(props) {
    const {galaxyBuds} = props;

    return <Headsets headsets={galaxyBuds} title="Galaxy Buds"/>;
}