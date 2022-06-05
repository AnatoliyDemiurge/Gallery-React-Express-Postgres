import { observer } from 'mobx-react-lite';
import React,{useContext, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { Context } from '../index';
import GenreBar from '../components/GenreBar';
import PainterBar from '../components/PainterBar'
import PictureList from '../components/PictureList';
import "../css/main.scss"
import "../css/Pictures.scss"
import { fetchGenres, fetchPainters, fetchPictures } from '../http/pictureAPI';
const Pictures = observer(() => {
    const {content} = useContext(Context)
    useEffect(()=>{
        fetchGenres().then(data=> content.setGenres(data))
        fetchPainters().then(data=> content.setPainters(data))
        fetchPictures().then(data=> content.setPictures(data.rows))
    },[])
    return (
        <Container className="pictures">
            <Row>
                <Col md={2}>
                    <GenreBar></GenreBar>
                </Col>
                <Col md={8}>
                    <PictureList>

                    </PictureList>
                </Col>
                <Col md={2}>
                    <PainterBar></PainterBar>
                </Col>
            </Row>
        </Container>
    )
})

export default Pictures;