import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faRoad, faMapMarkedAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './BadgeSection.css'

const BadgeSection = () => {
    return (
        <div className="badge-section">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="badge-container">
                            <div className="badge-icon-wrap">
                                <FontAwesomeIcon className="badge-icon" icon={faShieldAlt} />
                            </div>
                            <div className="badge-text">
                                <h4>Securied Hand</h4>
                                <p>We ensure top level of security for our clients.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="badge-container">
                            <div className="badge-icon-wrap">
                                <FontAwesomeIcon className="badge-icon" icon={faRoad} />
                            </div>
                            <div className="badge-text">
                                <h4>Skilled Guide</h4>
                                <p>We maintain the skillfull guide since we started.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="badge-container">
                            <div className="badge-icon-wrap">
                                <FontAwesomeIcon className="badge-icon" icon={faMapMarkedAlt} />
                            </div>
                            <div className="badge-text">
                                <h4>Location Chain</h4>
                                <p>We have management in every location chain.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="badge-container">
                            <div className="badge-icon-wrap">
                                <FontAwesomeIcon className="badge-icon" icon={faThumbsUp} />
                            </div>
                            <div className="badge-text">
                                <h4>Best Reviews</h4>
                                <p>We gained the best review from our clients.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BadgeSection;