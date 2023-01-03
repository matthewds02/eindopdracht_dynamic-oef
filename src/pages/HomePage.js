import React, {useState} from 'react';
import '../styles/products.css';
import {Col, Row} from "react-bootstrap";
import Headsets from "../components/Headsets";
import availableHeadsets from "../utilities/filteredUtilities";
import Sidebar from "../components/Sidebar";
import {useGetCollectionFromDatabase} from "../components/getCollectionFromDatabase";

// Deze functie retourneert een rij met een Headsets-component
function HeadsetRow(props) {
    const {headsets, title, isAvailable} = props;
    return (
        <Row>
            {isAvailable ?
                <Headsets headsets={availableHeadsets(headsets)} title={title}/>
                :
                <Headsets headsets={headsets} title={title}/>
            }

        </Row>
    );
}



// De HomePage-functie retourneert de hoofdpagina van de applicatie
export function HomePage() {
    // Gebruik een extra useState-hook voor de beschikbaarheid
    const [isAvailable, setIsAvailable] = useState(false);

    const {airpodsValues, galaxyBudsValues, huaweiBudsValues, oneplusBudsValues} = useGetCollectionFromDatabase();

    // Maak een lijst met de gegevens voor elke rij
    const rows = [
        {headsets: airpodsValues, title: "Apple Airpods"},
        {headsets: galaxyBudsValues, title: "Galaxy Buds"},
        {headsets: huaweiBudsValues, title: "Huawei FreeBuds"},
        {headsets: oneplusBudsValues, title: "OnePlus Buds"}
    ];

    return <>
        {/* Render de Sidebar-component */}
        <Sidebar isAvailable={isAvailable} setIsAvailable={setIsAvailable}/>

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
                headsets={row.headsets}
                title={row.title}
                isAvailable={isAvailable}
            />
        ))}

    </>
}