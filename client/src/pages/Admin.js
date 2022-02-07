import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import Pages from "../components/Pages";
import AddUser from "../components/AddUser";
import DeleteUser from "../components/DeleteUser";
import ChangeUserInfo from "../components/ChangeUserInfo";
import {observer} from "mobx-react-lite";

const Admin = observer(() => {
    const [addUserVisible, setAddUserVisible] = useState(false)
    const [deleteUserVisible, setDeleteUserVisible] = useState(false)
    const [changeUserInfoVisible, setChangeUserInfoVisible] = useState(false)
    return (
        <Container
            className="d-flex flex-column justify-content-center align-items-center"
            style={{height: window.innerHeight-60}}
        >
            <Pages />
            <Button className="m-md-2"
                    onClick={() => setAddUserVisible(true)}
                >
                Add new user
            </Button>
            <Button className="m-md-2"
                    onClick={() => setDeleteUserVisible(true)}
                >
                Delete user
            </Button>
            <Button className="m-md-2"
                    onClick={() => setChangeUserInfoVisible(true)}
                >
                Change user information
            </Button>
            <AddUser show={addUserVisible} onHide={() =>setAddUserVisible(false)}/>
            <DeleteUser show={deleteUserVisible} onHide={() =>setDeleteUserVisible(false)}/>
            <ChangeUserInfo show={changeUserInfoVisible} onHide={() =>setChangeUserInfoVisible(false)}/>
        </Container>
    );
});

export default Admin;