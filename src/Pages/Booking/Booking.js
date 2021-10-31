import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { Col, Container, Row } from 'react-bootstrap';
import './Booking.css'


const Booking = () => {
    const { users } = useAuth();

    const [singlePackage, setSinglePackage] = useState({});
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const { bookingId } = useParams();

    // get Single package data 
    useEffect(() => {
        const url = `https://wicked-caverns-60091.herokuapp.com/packages/${bookingId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSinglePackage(data)
                reset();
            });
    }, []);


    // submit booking form 
    const onSubmit = event => {
        console.log(event)
        fetch('https://wicked-caverns-60091.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully placed a booking.')
                    reset();
                }
            })
    };


    return (
        <div className="booking">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="section-heading">
                            <h4>Resonable &amp; Authentic</h4>
                            <h2>Book A Package</h2>
                            <p>Please fill the form and submit to confirm your booking.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="booking-form">
                            {/* boking form  */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>Full Name</label>
                                <input label="Name"  {...register("name", { required: true })} placeholder="name" defaultValue={users?.displayName} />
                                {errors.name && <span>This field is required</span>}

                                <label>Your Email</label>
                                <input  {...register("email", { required: true })} placeholder="email" defaultValue={users?.email} />
                                {errors.email && <span>This field is required</span>}

                                <label>Package</label>
                                <input  {...register("title")} placeholder="Package title" defaultValue={singlePackage.title} />
                                {errors.title && <span>This field is required</span>}

                                <label>Price($)</label>
                                <input  {...register("price")} placeholder="Price" defaultValue={singlePackage.price} />
                                {errors.price && <span>This field is required</span>}

                                <input type="hidden"  {...register("imgThumb")} defaultValue={singlePackage.imgThumb} />

                                <label>Your Address to Contact</label>
                                <textarea {...register("address", { required: true })} placeholder="Please input your address" />
                                {errors.address && <span>This field is required</span>}

                                <input type="hidden"  {...register("status", { required: true })} defaultValue="Pending" />

                                <input type="hidden"  {...register("color", { required: true })} defaultValue="tomato" />

                                <input className="booking-btn" type="submit" />
                            </form>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="booking-help">
                            <h4>Need Help?</h4>
                            <p>Please contact us if you have any query to make your booking properly or have question to know anything details about our packages. Our support team is ready to cooperate 24/7 for any kind of help.</p>
                            <div className="bookind-contact">
                                <h5>Address: 123 Down Street, CA</h5>
                                <h5>Email: admin1@travelley.com</h5>
                                <h5>Hotline1: +123 456 789</h5>
                                <h5>Hotline1: +123 456 910</h5>
                            </div>
                        </div>

                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default Booking;