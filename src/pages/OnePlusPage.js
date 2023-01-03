import React from 'react';
import '../styles/products.css';
import Headsets from "../components/Headsets";

function OnePlusPage(props) {
    const {onePlusBuds, setCart} = props;

    return <Headsets headsets={onePlusBuds} title="OnePlus Buds" setCart={setCart}/>;
}

export default OnePlusPage;