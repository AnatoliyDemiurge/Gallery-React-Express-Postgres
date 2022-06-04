import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import GenreBar from '../components/GenreBar';
const Pictures = () => {
    return (
        <Container>
            <Row>
                <Col md={2}>
                    <GenreBar></GenreBar>
                </Col>
                <Col md={8}>

                </Col>
                <Col md={2}>

                </Col>
            </Row>
        </Container>
    )
}

export default Pictures;