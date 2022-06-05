import React, { useContext } from 'react'
import {Modal, Button, Form, Dropdown} from "react-bootstrap"
import {Context} from "../../index"
const CreatePicture = ({show, onHide}) => {
    const {content} = useContext(Context)
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
                        className="mt-3"
                        placeholder={"Введите название картины"}
                    >
                    </Form.Control>
                    <Form.Control
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
                    >
                    </Form.Control>
                    <Dropdown 
                        className="mt-3"
                    >
                        <Dropdown.Toggle>Выберите Жанр</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {content.genres.map(genre =>
                                <Dropdown.Item key={genre.id}>{genre.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown 
                        className="mt-3"
                    >
                        <Dropdown.Toggle>Выберите Художника</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {content.painters.map(painter =>
                                <Dropdown.Item key={painter.id}>{painter.name}</Dropdown.Item>
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
}

export default CreatePicture