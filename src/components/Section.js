import {Col, Row} from "react-bootstrap";
import React from "react";

function Section(props) {
    const {children, title} = props

    return <>
        <Row className="my-4">
            <Col>
                <h1>{title}</h1>
            </Col>
        </Row>
        <Row>
            {children}
        </Row>
    </>
}

export default Section;