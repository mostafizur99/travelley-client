import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Discounts.css'

const Discounts = () => {

    const imgDiscount = 'https://149641971.v2.pressablecdn.com/wp-content/uploads/2021/09/twenty20_67bb688b-5b06-4109-9695-5bd7f9a94e22.jpg';

    return (
        <div className="discount">
            <Container fluid>
                <Row>
                    <Col md={6}>
                        <div className="discount-amount">
                            <img className="img-fluid" src={imgDiscount} alt="" />
                            <h2>42%</h2>
                            <h4>Discount</h4>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex align-items-center">
                        <div className="discount-text">
                            <h2>Last Minute Offer</h2>
                            <h4>A Very Charming Offer Of The Season</h4>
                            <p>We like offer a very exciting offer in continuous requests from our popular travellers in this season can be helpful as a boost of energy of many as we like to provide as always.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Discounts;