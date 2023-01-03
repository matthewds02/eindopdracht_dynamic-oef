import React from 'react';
import '../styles/products.css';
import Headsets from "../components/Headsets";

export function OnePlusPage(props) {
    const { onePlusBuds } = props;

    return <Headsets headsets={onePlusBuds} title="OnePlus Buds"/>;
}