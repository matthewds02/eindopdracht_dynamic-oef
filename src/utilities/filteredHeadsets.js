function filteredHeadsets(headsets, search) {
    return search ?
        headsets.filter(headset => headset.name.toLowerCase().includes(search.toLowerCase())) :
        headsets;
}

export default filteredHeadsets;