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
import Pages from "../components/Pages"
const Pictures = observer(() => {
    const {content} = useContext(Context)
    useEffect(()=>{
        fetchGenres().then(data=> content.setGenres(data))
        fetchPainters().then(data=> content.setPainters(data))
        fetchPictures(null, null, 1, 6).then(data=> {
            content.setPictures(data.rows)
            content.setTotalCount(data.count)
        })
    },[])

    useEffect(() => {
        fetchPictures(content.selectedGenre.id, content.selectedPainter.id, content.page, 6).then(data => {
            content.setPictures(data.rows)
            content.setTotalCount(data.count)
        })
    }, [content.page, content.selectedGenre, content.selectedPainter,])

    return (
        <Container className="pictures">
            <Row>
                <Col md={2}>
                    <GenreBar></GenreBar>
                </Col>
                <Col md={8}>
                    <PictureList>

                    </PictureList>
                    <Pages/>
                </Col>
                <Col md={2}>
                    <PainterBar></PainterBar>
                </Col>
            </Row>
        </Container>
    )
})

export default Pictures;