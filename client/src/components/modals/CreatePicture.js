import React, { useContext, useState, useEffect } from 'react'
import {Modal, Button, Form, Dropdown} from "react-bootstrap"
import {Context} from "../../index"
import { fetchGenres, fetchPainters} from '../../http/pictureAPI';
import {observer} from "mobx-react-lite"
const CreatePicture = observer(({show, onHide}) => {
    const {content} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [year, setYear] = useState(0)
    const [size, setSize] = useState('')
    const [file, setFile] = useState(null)

    useEffect(()=>{
        fetchGenres().then(data=> content.setGenres(data))
        fetchPainters().then(data=> content.setPainters(data))
    },[])

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Добавить Картину</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder={"Введите название картины"}
                    >
                    </Form.Control>
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder={"Введите стоимость картины"}
                        type="number"
                    >
                    </Form.Control>
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите описание картины"}
                    >
                    </Form.Control>
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите год написания картины"}
                    >
                    </Form.Control>
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите размер картины"}
                    >
                    </Form.Control>
                    <Form.Control
                        className="mt-3"
                        placeholder={"Загрузите фотографию картины"}
                        type="file"
                        onChange={selectFile}
                    >
                    </Form.Control>
                    <Dropdown 
                        className="mt-3"
                    >
                        <Dropdown.Toggle>{content.selectedGenre.name || "Выберите жанр"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {content.genres.map(genre =>
                                <Dropdown.Item 
                                    key={genre.id}
                                    onClick={() => {content.setSelectedGenre(genre);console.log(content._selectedGenre)}}
                                >
                                    {genre.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown 
                        className="mt-3"
                    >
                        <Dropdown.Toggle>{content.selectedPainter.name || "Выберите художника"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {content.painters.map(painter =>    
                                <Dropdown.Item
                                    key={painter.id}
                                    onClick={() => content.setSelectedPainter(painter)}
                                >
                                    {painter.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreatePicture