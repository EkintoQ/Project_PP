import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {changeUser} from "../http/userAPI";
import {observer} from "mobx-react-lite";

const ChangeUserInfo = observer(({show, onHide}) => {
    const [idd, setIdd] = useState('')
    const [namee, setNamee] = useState('')
    const [surnamee, setSurnamee] = useState('')
    const [loginn, setLoginn] = useState('')
    const [dateOfBirthh, setDateOfBirthh] = useState('')
    const [passwordd, setPasswordd] = useState('')
    const [rolee, setRolee] = useState('')

    const changeUserInfo = () => {
        const formData = new FormData();
        formData.append('id', idd)
        if (namee) {formData.append('name', namee)}
        if (surnamee) {formData.append('surname', surnamee)}
        if (loginn) {formData.append('login', loginn)}
        if (dateOfBirthh) {formData.append('dateOfBirth', dateOfBirthh)}
        if (passwordd) {formData.append('password', passwordd)}
        if (rolee) {formData.append('role', rolee)}
        changeUser(formData).then(data => onHide())
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
                    Change user information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={idd}
                        onChange={e => setIdd(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Id"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={namee}
                        onChange={e => setNamee(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Name"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={surnamee}
                        onChange={e => setSurnamee(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Surname"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={loginn}
                        onChange={e => setLoginn(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Login"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={passwordd}
                        onChange={e => setPasswordd(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Password"}
                        type={"password"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={dateOfBirthh}
                        onChange={e => setDateOfBirthh(e.target.value)}
                        className={"mt-2"}
                        placeholder={"DateOfBirth"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={rolee}
                        onChange={e => setRolee(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Role"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={changeUserInfo}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ChangeUserInfo;