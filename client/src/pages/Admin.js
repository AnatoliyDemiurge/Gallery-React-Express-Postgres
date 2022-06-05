import React, {useState} from 'react';
import {Container, Button} from "react-bootstrap";
import CreatePainter from "../components/modals/CreatePainter"
import "../css/Admin.scss"
const Admin = () => {
    const [painterVisible, setPainterVisible] = useState(false)
    return (
        <Container className="admin">
            <Button className="admin__button">Добавить Картину</Button>
            <Button className="admin__button">Удалить Картину</Button>
            <Button 
                className="admin__button"
                onClick={()=> setPainterVisible(true)}
            >
                Добавить Художника</Button>
            <Button className="admin__button">Удалить Художника</Button>
            <CreatePainter show={painterVisible} onHide={()=>setPainterVisible(false)}></CreatePainter>
        </Container>
    )
}

export default Admin;