import React, {useContext, useEffect, useState} from 'react';
import {Badge, Button, Container} from "react-bootstrap";
import TableOfUsers from "../components/TableOfUsers";
import AddUser from "../components/AddUser";
import DeleteUser from "../components/DeleteUser";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchUser} from "../http/userAPI";
import ChangeUserInfo from "../components/ChangeUserInfo";
import Pages from "../components/Pages";

const User = observer(() => {
    const [addUserVisible, setAddUserVisible] = useState(false)
    const [deleteUserVisible, setDeleteUserVisible] = useState(false)
    const [changeUserInfoVisible, setChangeUserInfoVisible] = useState(false)
    const {users} = useContext(Context)

    useEffect(()=>{
        fetchUser().then(data => {
            users.setUsers(data.rows)
            users.setTotalCount(data.count)
        })
    },[])

    useEffect(() =>{
        fetchUser(users.page).then(data => {
            users.setUsers(data.rows)
            users.setTotalCount(data.count)
        })
    },[users.page])

    return (
        <div>
        <h1>
            Table Of Users <Badge bg="secondary"/>
        </h1>
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight-60}}
            >
            <Pages />
            <TableOfUsers />
            <Button className="m-md-2"
                    onClick={() => setAddUserVisible(true)}>
                Add new user
            </Button>
            <Button className="m-md-2"
                    onClick={() => setDeleteUserVisible(true)}>
                Delete user
            </Button>
            <Button className="m-md-2"
                    onClick={() => setChangeUserInfoVisible(true)}>
                Change user information
            </Button>
            <AddUser show={addUserVisible} onHide={() =>setAddUserVisible(false)}/>
            <DeleteUser show={deleteUserVisible} onHide={() =>setDeleteUserVisible(false)}/>
            <ChangeUserInfo show={changeUserInfoVisible} onHide={() =>setChangeUserInfoVisible(false)}/>
        </Container>
        </div>
    );
});

export default User;
