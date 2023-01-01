import React from 'react';
import '../styles/products.css';
import {PICTURES_AIRPODS, PICTURES_GALAXYBUDS, PICTURES_HUAWEIBUDS, PICTURES_ONEPLUSBUDS} from "../data/data";
import {Col, Container, Row} from "react-bootstrap";
import {Headsets} from "../components/Headsets";

// Deze functie retourneert een rij met een Headsets-component
function HeadsetRow(props) {
    return (
        <Row>
            <Headsets headsets={props.headsets} title={props.title}/>
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
    return (
        <Container>
            {/* Render een rij met een koptekst */}
            <Row className="my-4">
                <Col>
                    <h1>alle draadloze hoofdtelefoons</h1>
                </Col>
            </Row>
            {/* Render elke rij in de lijst met behulp van de HeadsetRow-functie */}
            {rows.map((row) => (
                <HeadsetRow key={row.headsets} headsets={row.headsets} title={row.title}/>
            ))}
        </Container>
    );
}
