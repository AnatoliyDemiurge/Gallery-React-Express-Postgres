import React from 'react'
import "../css/PictureItem.scss"

const PictureItem = ({picture}) =>{
    console.log(picture)
    return (
        <div className="picture-item">
            <div className="picture-item__wrapper">
                <div className="picture-item__card">
                    <div className="picture-item__img-container">
                        <img alt="car" className="picture-item__img" src={picture.img}/>
                    </div>
                    <div className="picture-item__info">
                        <span className="picture-item__title">Название: {picture.name}</span>
                        <span className="picture-item__price">Цена: {picture.price}</span>
                    </div>
                </div>
            </div>
        </div>
        // <div className="element">
        //     <div className="element__wrapper">
        //         <div className="element__card">g</div>
        //     </div>
        // </div>

    )
    
}

export default PictureItem;