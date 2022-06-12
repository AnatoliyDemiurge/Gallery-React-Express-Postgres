import React,{useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite'
import { Context } from '../index';
import "../css/Basket.scss"
import { fetchPictures} from '../http/pictureAPI';
import {Container, Col} from 'react-bootstrap'
import PictureItem from '../components/PictureItem';
import { useNavigate } from "react-router-dom";
import { PICTURE_ROUTE } from '../utils/consts';
const Basket = observer( () => {
    const navigate = useNavigate();
    const {content} = useContext(Context)
    useEffect(()=>{
        fetchPictures().then(data=> content.setPictures(data.rows))
    },[])

    let pictureBasketArray
    if (localStorage.idPicture){
        pictureBasketArray = localStorage.idPicture.split(',');
        // console.log(pictureBasketArray)
    }
    console.log(content._basketPictures)
    return (
        <Container className="basket">
            <div className="basket__pages">
                <div className="basket__page-link">Корзина</div>
                <div className="basket__page-link">История покупок</div>
            </div>
            <Col md={10} className="basket__pictures">
                {
                    localStorage.idPicture 
                        ? 
                            content.pictures.map((picture) =>
                                pictureBasketArray.map((pictureBasket, defaultValue) => 
                                pictureBasket == picture.id ? 
                                    <div
                                        className="basket__picture"
                                        key={picture.id}
                                        picture={picture}
                                    >
                                        <div className="basket__picture-wrapper">
                                            <div className="basket__picture-card">
                                                <div className="basket__picture-img-container" onClick={() => navigate(PICTURE_ROUTE + "/" + picture.id)}>
                                                    <img alt="car" className="basket__picture-img" src={process.env.REACT_APP_API_URL + picture.img}/>
                                                </div>
                                                <div className="basket__picture-info">
                                                    <span className="basket__picture-title"> {picture.name}</span>
                                                    <span className="basket__picture-price">Цена: {picture.price} руб</span>
                                                </div>
                                                <div className="basket__picture-delete-container">
                                                    <button 
                                                        className="basket__picture-delete"
                                                        // onClick={
                                                        //     ()=>{
                                                        //         let deleteArray = []
                                                        //         let deleteString = ''
                                                        //         deleteArray = localStorage.idPicture.split(',')
                                                        //         deleteArray.map((deletePicture, defaultValue ) => {
                                                        //             if (picture.id == deleteArray[defaultValue]){
                                                        //                 deleteArray.splice(defaultValue,1)
                                                        //                 deleteString = deleteArray.toString()
                                                        //                 localStorage.setItem("idPicture", deleteString)
                                                        //             }
                                                        //         })
                                                        //     }
                                                        // }
                                                        onClick={()=> {content.deleteBasketPicture(picture.id)}}
                                                    >
                                                        Удалить из карзины
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>:
                                    <span key={defaultValue+5000}></span>    
                                )
                            )
                        :
                        <span>Ваша корзина пуста</span> 
                }
            </Col>
        </Container> 
    );
});

export default Basket;