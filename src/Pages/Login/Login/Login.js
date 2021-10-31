import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const [error, setError] = useState('');
    const {
        signInUsingGoogle
    } = useAuth();

    // redirect to the page before login 
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    // Google login-btn-handler 
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const googleLogo = 'https://i.ibb.co/ygTdWbz/goole-Logo.png';

    return (
        <div className="login">
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className="py-4">Please Login To Continue</h2>
                        <button onClick={handleGoogleLogin}> <img className="googleIcon me-2" src={googleLogo} alt="" />Sign in with Google</button>
                        <div className="">{error}</div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Login;