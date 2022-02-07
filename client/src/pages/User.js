import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import TableOfUsers from "../components/TableOfUsers";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchUser} from "../http/userAPI";
import Pages from "../components/Pages";

const User = observer(() => {
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
        <Container>
            <Pages />
            <TableOfUsers />
        </Container>
    );
});

export default User;
