import React from 'react';
import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
const logoImg = "https://i.ibb.co/FV8mBvF/logo.png";


const Footer = () => {

    return (
        <div className="Footer text-center text-white pt-4">
            <Container>
                <Row>

                    <Col md={4} className="my-4">
                        <h4 className="mb-4">Links</h4>
                        <Nav defaultActiveKey="/home" className="flex-column ">
                            <NavLink className="fs-6 mx-3 mb-3  text-decoration-none footer-item" to="/home">HOME</NavLink>
                            <NavLink className="fs-6 mx-3 mb-3 text-decoration-none footer-item" to="/manageOrders">MANAGE ORDER</NavLink>
                            <NavLink className="fs-6 mx-3 mb-3 text-decoration-none footer-item" to="/addPackage">ADD PACKAGE</NavLink>
                            <NavLink className="fs-6 mx-3 mb-3 text-decoration-none footer-item" to="/login">LOGIN</NavLink>


                        </Nav>
                    </Col>
                    <Col md={4} className="my-4">
                        <h4 className="footer-logo mb-4">
                            <a className="fw-bold" href="/">
                                <img src={logoImg} className="logo-image footer-img" alt="" />

                                <span className="ms-2 fs-1 logo-text text-white me-1"><span className="primary-color  fancy-logo me-1">T</span>ravelley</span>
                            </a>
                        </h4>
                        <h5>Address</h5>
                        <p className="footer-item">123, Down street, CA </p>
                        <h5>Phone</h5>
                        <p className="footer-item">+123 456 789</p>
                        <div className="footer-social">
                            <a className="footer-icon-wrap" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faFacebookF} /></a>
                            <a className="footer-icon-wrap ms-2" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faTwitter} /></a>
                            <a className="footer-icon-wrap ms-2" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faLinkedinIn} /></a>
                            <a className="footer-icon-wrap ms-2" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faInstagram} /></a>
                        </div>
                    </Col>
                    <Col md={4} className="my-4">
                        <h4 className="ms-3 mb-4">Twitter Feed</h4>
                        <ListGroup className="text-white">
                            <ListGroup.Item className="footer-item"><FontAwesomeIcon className="footer-icon" icon={faTwitter} /> <span>Like to thanks @Travelly for the best trip to organize with a friendly environment to have a very enjoyable time indeed.</span></ListGroup.Item>
                            <ListGroup.Item className="footer-item"><FontAwesomeIcon className="footer-icon" icon={faTwitter} /> <span>Really very charming experience to explore my desire part of the word with my friends, really memorable event ogf my life </span></ListGroup.Item>

                        </ListGroup>
                    </Col>
                </Row>
            </Container>

            {/* copyright section  */}
            <div className="copy-right-section mt-4">
                <Container>
                    <Row className="align-items-center">
                        <Col sm={12} md={12}>
                            <div className="copy-right">
                                <p className="m-0">© 2021 TRAVELLEY, All right reserved.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default Footer;