import React from 'react'
import "../css/PictureItem.scss"
import {Image} from "react-bootstrap"
const PictureItem = ({picture}) =>{
    console.log(picture)
    return (
        // <div className="element">
        //     <div className="element__wrapper">
        //         <div className="element__card card">
        //             {/* <img alt="car" className="" src={picture.img}/> */}
                   
        //         </div>
        //     </div>
        // </div>
        <Image width={150} height={150} src={picture.img}/>
    )
    
}

export default PictureItem;