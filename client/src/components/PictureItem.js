import React from 'react'
import "../css/PictureItem.scss"
import { useNavigate } from "react-router-dom";
import { PICTURE_ROUTE } from '../utils/consts';

const PictureItem = ({picture}) =>{
    console.log(picture)
    const navigate = useNavigate();
    return (
        <div className="picture-item" onClick={() => navigate(PICTURE_ROUTE + "/" + picture.id)}>
            <div className="picture-item__wrapper">
                <div className="picture-item__card">
                    <div className="picture-item__img-container">
                        <img alt="car" className="picture-item__img" src={process.env.REACT_APP_API_URL + picture.img}/>
                    </div>
                    <div className="picture-item__info">
                        <span className="picture-item__title"> {picture.name}</span>
                        <span className="picture-item__price">Цена: {picture.price} руб</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PictureItem;