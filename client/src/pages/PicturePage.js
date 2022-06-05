import React from 'react';
import {Col, Row, Container} from "react-bootstrap"
import "../css/PicturePage.scss"
const PicturePage = () => {
    const picture = 
        {
            id:1,
            name:'Роза',
            price:10000,
            description:'Красивое такое шо ну супер ну реально хорошо здорово круто отлично. Прилично. Эксентрично. Публичнр. Круто. Наруто. Фахито.нчил пед, затем мед. Следовательно прорруто. Фахито.нчил пед, затем мед. Следовруто.Фахито. Окончил пед, затем мед. Следовруто. Фахито. Окончил пед, затем мед. Следовательно',
            img:'https://i.pinimg.com/736x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg',
            year:'2010',
            size:'20x20'
        }
    
    return (
        <Container>
            <Row className="picture-page">
                <Col md={6}>
                    <div className="picture-page__container-img">
                        <img alt="car" className="picture-page__img" src={picture.img}/>
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
                            
                        </button>   
                   </div>
                </Col>
            </Row>            
        </Container>
    )
}

export default PicturePage;