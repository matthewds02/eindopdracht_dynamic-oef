import React from "react";

function cuttedProductName(props) {
    // Haalt de naam van het product op zonder de bestandsextensie
    const name = props.split(".")[0];
    return name;
}

export default cuttedProductName;
