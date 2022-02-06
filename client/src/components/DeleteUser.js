import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {deleteUser} from "../http/userAPI";
import {observer} from "mobx-react-lite";

const DeleteUser = observer(({show, onHide}) => {
    const [id, setId] = useState('')

    const isDeletedUser = () => {
        const formData = new FormData()
        formData.append('id', id)
        deleteUser(formData).then(data => {
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete user
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value = {id}
                        onChange={e => setId(e.target.value)}
                        placeholder={"ID"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={isDeletedUser}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteUser;