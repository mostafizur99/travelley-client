import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);


    // all users order 
    useEffect(() => {
        fetch('https://wicked-caverns-60091.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
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
        const url = `https://wicked-caverns-60091.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    setIsDeleted(true);
                }
            })
    }

    return (
        <div>
            <h2>Manage orders: {orders.length}</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Package Name</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Ac</th>
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
                                <td><button onClick={() => handleCancel(order._id)}>Delete</button></td>
                                <td><span style={{ color: order?.color }}>{order?.status}</span><button onClick={() => handleReceive(order._id)}>Receive</button></td>
                            </tr>
                        )
                    }



                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;