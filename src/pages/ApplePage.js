import React from 'react';
import '../styles/products.css';
import Headsets from "../components/Headsets";

function ApplePage(props) {
    const {airpods, setCartHeadsets} = props;

    return <Headsets headsets={airpods} title="Apple Airpods" setCartHeadsets={setCartHeadsets}/>;
}

export default ApplePage;