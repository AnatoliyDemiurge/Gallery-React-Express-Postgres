import React from 'react';
import {Col, Row, Container} from "react-bootstrap"
import "../css/PicturePage.scss"
const PicturePage = () => {
    const picture = 
        {
            id:1,
            name:'Роза',
            price:10000,
            description:'Красивое такое шо ну супер ну реально хорошо здорово круто отлично.Прилично.Эксентрично.Публичнр.Круто.Наруто.Фахито.нчил пед, затем мед. Следовательно прорруто.Фахито.нчил пед, затем мед. Следовруто.Фахито.нчил пед, затем мед. Следовруто.Фахито.нчил пед, затем мед. Следов',
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
                    afaf
                </Col>
            </Row>            
        </Container>
    )
}

export default PicturePage;