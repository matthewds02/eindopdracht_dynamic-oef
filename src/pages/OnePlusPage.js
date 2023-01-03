import React from 'react';
import '../styles/products.css';
import Headsets from "../components/Headsets";

function OnePlusPage(props) {
    const {onePlusBuds, setCartHeadsets} = props;

    return <Headsets headsets={onePlusBuds} title="OnePlus Buds" setCartHeadsets={setCartHeadsets}/>;
}

export default OnePlusPage;