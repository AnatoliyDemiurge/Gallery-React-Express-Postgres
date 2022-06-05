import React from 'react'
import {Modal, Button, Form} from "react-bootstrap"
const DeletePainter = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Удалить художника</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите имя художника"}
                    >

                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeletePainter