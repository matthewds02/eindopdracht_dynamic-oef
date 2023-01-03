import React from 'react';
import '../styles/products.css';
import Headsets from "../components/Headsets";

function ApplePage(props) {
    const {airpods, setCart} = props;

    return <Headsets headsets={airpods} title="Apple Airpods" setCart={setCart}/>;
}

export default ApplePage;