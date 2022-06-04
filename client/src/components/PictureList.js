import React, {useContext} from 'react';
import {observer} from "mobx-react-lite"
import {Context} from "../index"
import PictureItem from './PictureItem';

const PictureList = observer(()=>{
    const {content} = useContext(Context)
    return (
        <div>
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