import React, {useState} from 'react';
import '../styles/products.css';
import {PICTURES_AIRPODS, PICTURES_GALAXYBUDS, PICTURES_HUAWEIBUDS, PICTURES_ONEPLUSBUDS} from "../data/data";
import {Col, Container, Row} from "react-bootstrap";
import {Headsets} from "../components/Headsets";
import {availableHeadsets} from "../utilities/filteredUtilities";
import {Sidebar} from "../components/Sidebar";

// Deze functie retourneert een rij met een Headsets-component
function HeadsetRow(props) {
    const {headsets, title, isAvailable} = props;
    console.log(isAvailable);
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

// Maak een lijst met de gegevens voor elke rij
const rows = [
    {headsets: PICTURES_AIRPODS, title: "Apple Airpods"},
    {headsets: PICTURES_GALAXYBUDS, title: "Galaxy Buds"},
    {headsets: PICTURES_HUAWEIBUDS, title: "Huawei FreeBuds"},
    {headsets: PICTURES_ONEPLUSBUDS, title: "OnePlus Buds"}
];

// De HomePage-functie retourneert de hoofdpagina van de applicatie
export function HomePage() {
    // Gebruik een extra useState-hook voor de beschikbaarheid
    const [isAvailable, setIsAvailable] = useState(false);

    return (
        <Container>
            {/* Render de Sidebar-component */}
            <Sidebar isAvailable={isAvailable} setIsAvailable={setIsAvailable}/>

            {/* Render een rij met een koptekst */}
            <Row className="my-4">
                <Col>
                    <h1>alle draadloze hoofdtelefoons</h1>
                </Col>
            </Row>
            {/* Render elke rij in de lijst met behulp van de HeadsetRow-functie */}
            {rows.map((row) => (
                <HeadsetRow key={row.headsets.map(h => h.name)} headsets={row.headsets} title={row.title}
                            isAvailable={isAvailable}/>
            ))}
        </Container>
    );
}