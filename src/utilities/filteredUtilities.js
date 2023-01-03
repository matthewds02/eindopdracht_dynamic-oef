function availableHeadsets(props) {
    // Gebruik een filterfunctie om alleen de props door te laten die een prijs hebben
    const filtered = props.filter((h) => h.price);
    return filtered;
}

export default availableHeadsets;
