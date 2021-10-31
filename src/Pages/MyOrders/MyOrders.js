import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './MyOrders.css'

const MyOrders = () => {
    const { users } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true)
        fetch(`https://wicked-caverns-60091.herokuapp.com/myOrders/${users?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                setIsLoading(false);

            });
    }, [users.email, isDeleted]);


    // DELETE  orders
    const handlecancel = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://wicked-caverns-60091.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setIsDeleted(true);
                        alert('deleted successfully');
                        const remainingUsers = orders.filter(order => order._id !== id);
                        setOrders(remainingUsers);
                    } else {
                        setIsDeleted(false);
                    }
                });
        }
    }

    if (isLoading) {
        return <Spinner
            animation="border" variant="danger"
        />
    }

    return (
        <div className="my-order">
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {/* user info  */}
                    <Col className="bg-dark py-2 text-white d-flex  justify-content-center" md={3}>
                        <div className="user-dashboard mt-3">
                            <FontAwesomeIcon className="me-1 fs-3" icon={faUserCircle} />
                            <h5>{users.displayName}</h5>
                            <h6>Email: {users.email}</h6>
                            <h6>Total Booking: {orders.length}</h6>
                        </div>
                    </Col>
                    <Col className="py-5" md={9}>
                        {/* user booking summary */}
                        <Row xs={2} md={3}>
                            {
                                orders.map(order =>
                                    <Col key={order._id}>
                                        <Card className="mb-4">
                                            <Card.Img className="order-image" variant="top" src={order.imgThumb} />
                                            <Card.Body className="text-start">
                                                <Card.Title className="order-title">{order.title}</Card.Title>
                                                <Card.Title className="order-price">Price: ${order.price}</Card.Title>
                                                <Card.Text className="order-status">
                                                    Status: <span className="custom-status" style={{ backgroundColor: order?.color }}>{order.status}</span>
                                                </Card.Text>

                                                <button className="order-btn" onClick={() => handlecancel(order._id)}>Cancel</button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MyOrders;