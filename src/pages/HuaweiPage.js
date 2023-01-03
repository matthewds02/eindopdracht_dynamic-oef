import React from 'react';
import '../styles/products.css';
import Headsets from "../components/Headsets";

function HuaweiPage(props) {
    const {huaweiBuds, setCart} = props;

    return <Headsets headsets={huaweiBuds} title="Huawei FreeBuds" setCart={setCart}/>;
}

export default HuaweiPage;
