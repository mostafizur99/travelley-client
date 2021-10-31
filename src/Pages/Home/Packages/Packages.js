import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    // load all packages from database 
    useEffect(() => {
        fetch('https://wicked-caverns-60091.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

    const history = useHistory()
    const handleBooking = (bookingId) => {
        history.push(`/booking/${bookingId}`);
    }



    return (
        <div className="packages">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="section-heading">
                            <h4>Resonable &amp; Attractive</h4>
                            <h2>Explore the Unseen</h2>
                            <p>We have best packages to travel around the word with resonable prices and attractive spots to explore your dream with comfortable facilities.</p>
                        </div>
                    </Col>
                </Row>



                <div>
                    <Row xs={2} md={4} className="g-1">
                        {
                            packages.map(singlePackage =>
                                <Col key={singlePackage._id}>

                                    <Card className="card-container border-0 text-white">
                                        <Card.Img src={singlePackage.imgThumb} alt="Card image" />
                                        <span className="package-price">${singlePackage.price}</span>
                                        <button className="package-btn" onClick={() => handleBooking(singlePackage._id)}>Book now</button>
                                        <div className="package-content">
                                            <h4>{singlePackage.description}</h4>
                                            <h3>{singlePackage.title}</h3>
                                        </div>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Packages;