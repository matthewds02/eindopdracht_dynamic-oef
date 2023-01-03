import '../styles/products.css';
import Headsets from "../components/Headsets";
import availableHeadsets from "../utilities/filteredUtilities";
import Sidebar from "../components/Sidebar";
import {useCollectionFromDatabase} from "../components/CollectionDatabase";
import filteredHeadsets from "../utilities/filteredHeadsets";
import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";

// Deze functie retourneert een rij met een Headsets-component
function HeadsetRow(props) {
    const {headsets, title, isAvailable, setCartHeadsets} = props;
    return (
        <Row>
            {isAvailable ?
                <Headsets headsets={availableHeadsets(headsets)} title={title} setCartHeadsets={setCartHeadsets}/>
                :
                <Headsets headsets={headsets} title={title} setCartHeadsets={setCartHeadsets}/>
            }

        </Row>
    );
}

// De HomePage-functie retourneert de hoofdpagina van de applicatie
function HomePage(props) {
    const {setCartHeadsets} = props;
    // Gebruik een extra useState-hook voor de beschikbaarheid
    const [isAvailable, setIsAvailable] = useState(false);
    const [search, setSearch] = useState(""); // Nieuwe useState hook voor de zoekbalk

    const {airpodsValues, galaxyBudsValues, huaweiBudsValues, oneplusBudsValues} = useCollectionFromDatabase();

    // Maak een lijst met de gegevens voor elke rij
    const rows = [
        {headsets: airpodsValues, title: "Apple Airpods"},
        {headsets: galaxyBudsValues, title: "Galaxy Buds"},
        {headsets: huaweiBudsValues, title: "Huawei FreeBuds"},
        {headsets: oneplusBudsValues, title: "OnePlus Buds"}
    ];

    return <>
        {/* Render de Sidebar-component */}
        <Sidebar isAvailable={isAvailable} setIsAvailable={setIsAvailable} search={search} setSearch={setSearch}/>

        {/* Render een rij met een koptekst */}
        <Row className="my-4">
            <Col>
                <h1>alle draadloze hoofdtelefoons</h1>
            </Col>
        </Row>
        {/* Render elke rij in de lijst met behulp van de HeadsetRow-functie */}
        {rows.map(row => (
            <HeadsetRow
                key={row.title}
                headsets={filteredHeadsets(row.headsets, search)}
                title={row.title}
                isAvailable={isAvailable}
                setCartHeadsets={setCartHeadsets}
            />
        ))}
    </>
}

export default HomePage;