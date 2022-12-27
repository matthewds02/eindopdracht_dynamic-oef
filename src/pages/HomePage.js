import React from 'react';
import '../styles/products.css';
import {PICTURES_AIRPODS, PICTURES_GALAXYBUDS, PICTURES_HUAWEIBUDS, PICTURES_ONEPLUSBUDS} from "../data/data";
import {ApplePage} from "./ApplePage";
import {Col, Container, Row} from "react-bootstrap";
import {SamsungPage} from "./SamsungPage";
import {HuaweiPage} from "./HuaweiPage";
import {OnePlusPage} from "./OnePlusPage";

export function HomePage() {

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h1>all wireless headphones</h1>
                </Col>
            </Row>
            <Row>
                <ApplePage airpods={PICTURES_AIRPODS} />
            </Row>
            <Row>
                <SamsungPage galaxyBuds={PICTURES_GALAXYBUDS} />
            </Row>
            <Row>
                <HuaweiPage huaweiBuds={PICTURES_HUAWEIBUDS} />
            </Row>
            <Row>
                <OnePlusPage onePlusBuds={PICTURES_ONEPLUSBUDS} />
            </Row>
        </Container>
    );
}
