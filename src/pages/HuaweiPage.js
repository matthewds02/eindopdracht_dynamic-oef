import React from 'react';
import '../styles/products.css';
import {Headsets} from "../components/Headsets";

export function HuaweiPage(props) {
    const {huaweiBuds} = props;

    return <Headsets headsets={huaweiBuds} title="Huawei FreeBuds"/>;
}
