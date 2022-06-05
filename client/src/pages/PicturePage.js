import React, { useEffect, useState } from 'react';
import {Col, Row, Container} from "react-bootstrap"
import "../css/PicturePage.scss"
import { fetchOnePicture } from '../http/pictureAPI';
import {useParams} from 'react-router-dom';
const PicturePage = () => {
    const [picture, setPicture] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        fetchOnePicture(id).then(data => setPicture(data))
    },[])
    return (
        <Container>
            <Row className="picture-page">
                <Col md={6}>
                    <div className="picture-page__container-img">
                        <img alt="car" className="picture-page__img" src={process.env.REACT_APP_API_URL + picture.img}/>
                    </div>
                </Col>
                
                <Col md={6}>
                    <div className="picture-page__info">
                        <p className="picture-page__title picture-page__item">Название: {picture.name}</p>
                        <p className="picture-page__price picture-page__item">Цена: {picture.price}</p>
                        <p className="picture-page__description picture-page__item">Описание: {picture.description}</p>
                        <p className="picture-page__year picture-page__item">Год написания: {picture.year}</p>
                        <p className="picture-page__size picture-page__item">Размер(в см): {picture.size}</p>
                        <p className="picture-page__painter picture-page__item">Художник: Вася Пупкин</p>
                    </div>
                   <div className="picture-page__container-button-modal">
                        <button className="picture-page__button-modal">
                            Купить
                        </button>   
                   </div>
                   <div className="picture-page__container-button">
                        <button className="picture-page__button">
                            Добавить в корзину
                        </button>   
                   </div>
                </Col>
            </Row>            
        </Container>
    )
}

export default PicturePage;