import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './MyOrders.css'

const MyOrders = () => {
    const { users } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        fetch(`https://wicked-caverns-60091.herokuapp.com/myOrders/${users?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
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


    return (
        <div className="my-order">
            <Container>
                <h3>My orders: {orders.length}</h3>
                <Row xs={1} md={4} className="g-4">
                    {/* user info  */}
                    <Col className="bg-dark py-2 text-white d-flex align-items-center justify-content-center" md={3}>
                        <div className="user-dashboard ">
                            <FontAwesomeIcon className="me-1 fs-3" icon={faUserCircle} />
                            <h5>{users.displayName}</h5>
                            <h6>Email: {users.email}</h6>
                        </div>
                    </Col>
                    <Col md={9}>
                        {/* user booking summary */}
                        <Row xs={1} md={4}>
                            {
                                orders.map(order =>
                                    <Col key={order._id}>
                                        <Card>
                                            <Card.Img className="order-image" variant="top" src={order.imgThumb} />
                                            <Card.Body>
                                                <Card.Title>{order.name}</Card.Title>
                                                <Card.Title>{order.title}</Card.Title>
                                                <Card.Text>
                                                    {order.description}
                                                </Card.Text>
                                                <button onClick={() => handlecancel(order._id)}>Cancel</button>
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