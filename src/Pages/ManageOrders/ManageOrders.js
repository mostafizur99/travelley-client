import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import './ManageOrders.css';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    const [isLoading, setIsLoading] = useState(true);



    // all users order 
    useEffect(() => {
        setIsLoading(true)
        fetch('https://wicked-caverns-60091.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setIsLoading(false)
            });
    }, [isDeleted]);

    // DELETE  orders
    const handleCancel = id => {
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

    // UPDATE status 
    const handleReceive = id => {
        setIsLoading(true)
        const url = `https://wicked-caverns-60091.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    setIsDeleted(true);
                    setIsLoading(false)

                }
            })
    }

    if (isLoading) {
        return <Spinner
            animation="border" variant="danger"
        />
    }

    return (
        <div className="manage-order">
            <Container fluid>
                <Row>
                    <Col>
                        <h2 className="manage-heading mb-4">Total orders: {orders.length}</h2>

                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Package Name</th>
                                    <th>User Name</th>
                                    <th>User Email</th>
                                    <th>Remove</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    orders.map(order =>
                                        <tr key={order?._id}>
                                            <td>1</td>
                                            <td>{order?.title}</td>
                                            <td>{order?.name}</td>
                                            <td>{order?.email}</td>
                                            <td>
                                                <button className="delete-btn
" onClick={() => handleCancel(order._id)}>Delete</button>
                                            </td>
                                            <td>
                                                <span className="custom-status" style={{ backgroundColor: order?.color }}>{order?.status} </span>

                                                <button className="receive-btn" onClick={() => handleReceive(order._id)}>Receive</button></td>
                                        </tr>
                                    )
                                }



                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ManageOrders;