import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth';
import './Header.css'


const Header = () => {
    const { users, logOut } = useAuth();

    const logoImg = "https://i.ibb.co/FV8mBvF/logo.png";

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
                <Container>
                    <Navbar.Brand className="fw-bold fs-2" href="/"><img src={logoImg} className="logo-image" alt="" />
                        <span className="ms-2 fs-1 logo-text me-1"><span className="primary-color  fancy-logo me-1">T</span>ravelley</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="fw-bold align-items-center">
                            <Nav.Link className="nav-item" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="nav-item" as={Link} to="/addPackage">Add Package</Nav.Link>
                            <Nav.Link className="nav-item" as={Link} to="/manageOrders">Manage Orders</Nav.Link>

                            {
                                !users.email ?
                                    <>
                                        <Nav.Link className="nav-item" as={Link} to="/login">Login</Nav.Link>
                                        {/* <Nav.Link className="nav-item" as={Link} to="/sign-up">Sign Up</Nav.Link> */}
                                    </> :
                                    <>
                                        {/* <Nav.Link className="nav-item" as={Link} to="/login"><span>{users.displayName}</span></Nav.Link> */}

                                        {/* <Navbar.Text className="fst-italic fw-bold">
                                            Signed in as: <a className="nav-item" href="/login">{users.displayName}</a>
                                        </Navbar.Text> */}
                                        <Nav.Link className="nav-item" as={Link} to="/myOrders">My Orders</Nav.Link>
                                        <span>
                                            <div className="mt-2"><FontAwesomeIcon className="me-1" icon={faUserCircle} /> <span className="nav-user">{users.displayName}</span></div>
                                            <button onClick={logOut} className="nav-sign-out mt-2 ms-1">Sign out</button>
                                        </span>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;