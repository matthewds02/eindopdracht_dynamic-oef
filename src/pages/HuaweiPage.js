import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/products.css';
import ProductCard from '../components/ProductsCard';

export function HuaweiPage(props) {
    const {huaweiBuds} = props;

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h1>Huawei FreeBuds</h1>
                </Col>
            </Row>
            <Row>
                {huaweiBuds.map(product => (
                    <Col xs={12} md={6} lg={4} key={product.id} className="product-card-parent text-center">
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
