import React from "react";

export function availableHeadsets(props) {
    // Gebruik een filterfunctie om alleen de props door te laten die een prijs hebben
    const filtered = props.filter((h) => h.price);
    console.log(filtered);
    return filtered;
}
