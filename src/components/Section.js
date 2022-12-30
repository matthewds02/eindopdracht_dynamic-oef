import {Col, Container, Row} from "react-bootstrap";
import React from "react";

export function Section(props) {
    const {children, title} = props

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h1>{title}</h1>
                </Col>
            </Row>
            <Row>
                {children}
            </Row>
        </Container>
    );
}