import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite'
import { Context } from '../index';
import "../css/GenreBar.scss"
import { ListGroup } from 'react-bootstrap';

const GenreBar = observer( () => {
    const {content} = useContext(Context)
    return (
            <ListGroup>
                {content.genres.map(genre =>
                    <ListGroup.Item
                        className="genre__item" 
                        active={genre.id === content._selectedGenre.id}
                        onClick={() => content.setSelectedGenre(genre)}
                        key={genre.id}
                    >
                        
                        {genre.name}
                    </ListGroup.Item>
                )}
            </ListGroup>

    );
});

export default GenreBar;