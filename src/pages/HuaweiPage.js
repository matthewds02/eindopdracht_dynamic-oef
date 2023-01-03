import React from 'react';
import '../styles/products.css';
import Headsets from "../components/Headsets";

function HuaweiPage(props) {
    const {huaweiBuds, setCartHeadsets} = props;

    return <Headsets headsets={huaweiBuds} title="Huawei FreeBuds" setCartHeadsets={setCartHeadsets}/>;
}

export default HuaweiPage;
