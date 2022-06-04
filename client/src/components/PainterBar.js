import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite'
import { Context } from '../index';
import "../css/PainterBar.scss"
import { ListGroup } from 'react-bootstrap';

const GenreBar = observer( () => {
    const {content} = useContext(Context)
    return (
            <ListGroup>
                {content.painters.map(painter =>
                    <ListGroup.Item
                        className="painter__item" 
                        active={painter.id === content._selectedPainter.id}
                        onClick={() => content.setSelectedPainter(painter)}
                        key={painter.id}
                    >
                        {painter.name}
                    </ListGroup.Item>
                )}
            </ListGroup>

    );
});

export default GenreBar;