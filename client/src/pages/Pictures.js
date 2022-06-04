import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import GenreBar from '../components/GenreBar';
import PainterBar from '../components/PainterBar'
import PictureList from '../components/PictureList';
import "../css/main.scss"
const Pictures = () => {
    return (
        <Container>
            <Row>
                <Col md={2}>
                    <GenreBar></GenreBar>
                </Col>
                <Col md={8}>
                    <PictureList></PictureList>
                </Col>
                <Col md={2}>
                    <PainterBar></PainterBar>
                </Col>
            </Row>
        </Container>
    )
}

export default Pictures;