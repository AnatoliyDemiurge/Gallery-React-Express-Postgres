import React, {useState} from 'react';
import {Container, Button} from "react-bootstrap";
import CreatePainter from "../components/modals/CreatePainter"
import CreatePicture from '../components/modals/CreatePicture';
import DeletePainter from '../components/modals/DeletePainter';
import DeletePicture from '../components/modals/DeletePicture';
import "../css/Admin.scss"
const Admin = () => {
    const [pictureCreateVisible, setPictureCreateVisible] = useState(false)
    const [pictureDeleteVisible, setPictureDeleteVisible] = useState(false)
    const [painterCreateVisible, setPainterCreateVisible] = useState(false)
    const [painterDeleteVisible, setPainterDeleteVisible] = useState(false)
    return (
        <Container className="admin">
            <Button 
                className="admin__button"
                onClick={()=> setPictureCreateVisible(true)}
            >
                Добавить Картину</Button>
            <Button 
                onClick={()=> setPictureDeleteVisible(true)}
                className="admin__button"
            >
                Удалить Картину
            </Button>
            <Button 
                className="admin__button"
                onClick={()=> setPainterCreateVisible(true)}
            >
                Добавить Художника
            </Button>
            <Button 
                className="admin__button"
                onClick={()=>setPainterDeleteVisible(true)}    
            >
                Удалить Художника
            </Button>
            <CreatePicture show={pictureCreateVisible} onHide={()=>setPictureCreateVisible(false)}></CreatePicture>
            <DeletePicture show={pictureDeleteVisible} onHide={()=>setPictureDeleteVisible(false)}></DeletePicture>
            <CreatePainter show={painterCreateVisible} onHide={()=>setPainterCreateVisible(false)}></CreatePainter>
            <DeletePainter show={painterDeleteVisible} onHide={()=>setPainterDeleteVisible(false)}></DeletePainter>
        </Container>
    )
}

export default Admin;