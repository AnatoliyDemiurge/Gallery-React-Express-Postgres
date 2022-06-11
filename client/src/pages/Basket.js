import React,{useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite'
import { Context } from '../index';
import "../css/GenreBar.scss"
import { ListGroup } from 'react-bootstrap';
import { fetchPictures} from '../http/pictureAPI';
const Basket = observer( () => {
    const {content} = useContext(Context)
    useEffect(()=>{
        fetchPictures().then(data=> content.setPictures(data.rows))
    },[])

    // const dGenres = [];
    // function jopa(id) {
    //     dGenres.push(id)
    //     localStorage.setItem('genres', JSON.stringify(dGenres))
    // }

    // content.genres.map(genre =>
    //    jopa(genre.id)
    // )
    let pictureBasketArray
    if (localStorage.idPicture){
        pictureBasketArray = localStorage.idPicture.split(',');
        console.log(pictureBasketArray)
    }
    return (
        <div>
            {
                localStorage.idPicture ? 
                    content.pictures.map((picture) =>
                        <div
                            key={picture.id}
                            
                        >
                            {
                                pictureBasketArray.map(pictureBasket => 
                                    pictureBasket == picture.id ? 
                                    <div>{picture.name}</div>:
                                    <div></div>
                                )
                            }
                        </div>
                    )
                :<div>Ваша корзина пуста</div> 
            }
        </div>
    );
});

export default Basket;