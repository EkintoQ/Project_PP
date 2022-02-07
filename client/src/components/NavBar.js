import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";


const NavBar = observer(() => {
    const {users} = useContext(Context)

    const logOut = () =>{
        localStorage.removeItem('token')
        users.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>CRM</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink href="/">Table</NavLink>
                    {!users.isAuth ?
                        <NavLink href={LOGIN_ROUTE}>
                            Log In
                        </NavLink>
                        :
                        <NavLink onClick={() => logOut()}>
                            Log Out
                        </NavLink>
                    }
                        <NavLink href={ADMIN_ROUTE}>
                            AdminPanel
                        </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
});

export default NavBar;