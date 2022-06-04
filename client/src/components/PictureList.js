import React, {useContext} from 'react';
import {observer} from "mobx-react-lite"
import {Context} from "../index"
import PictureItem from './PictureItem';
import "../css/PictureList.scss"

const PictureList = observer(()=>{
    const {content} = useContext(Context)
    return (
        <div className="picture-list">
            {content.pictures.map(picture =>
                <PictureItem
                    key={picture.id}
                    picture={picture}
                >
                </PictureItem>
            )}
        </div>
    );
});

export default PictureList;