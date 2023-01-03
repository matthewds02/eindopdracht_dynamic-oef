import React from 'react';
import '../styles/products.css';
import Headsets from "../components/Headsets";

function SamsungPage(props) {
    const {galaxyBuds, setCartHeadsets} = props;

    return <Headsets headsets={galaxyBuds} title="Galaxy Buds" setCartHeadsets={setCartHeadsets}/>;
}

export default SamsungPage;