import React from 'react';
import '../styles/products.css';
import Headsets from "../components/Headsets";

function SamsungPage(props) {
    const {galaxyBuds, setCart} = props;

    return <Headsets headsets={galaxyBuds} title="Galaxy Buds" setCart={setCart}/>;
}

export default SamsungPage;