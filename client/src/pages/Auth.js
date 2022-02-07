import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {loginUser} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router";


const Auth = observer(() => {
    const {users} = useContext(Context)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    const logIn = async () => {
        try {
            let user = await loginUser(login, password)
            users.setData(user)
            users.setIsAuth(true)
            if (users.isData.role === 'ADMIN') {
                console.log(users.isData.role)
                users.setIsAdmin(true)}
            navigate('/')
        } catch (e) {
            alert(e)
        }
    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight-100}}
        >
            <Card style={{width: 600}} className="p-4">
                <h1 className="m-auto">
                    Log In
                </h1>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        >
                    </Form.Control>
                    <Form.Control
                        className="mt-3"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    >
                    </Form.Control>
                    <Button
                        onClick={logIn}
                        className="mt-3">
                        Log In
                    </Button>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;