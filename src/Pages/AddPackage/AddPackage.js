import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddPackage.css';


const AddPackage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = event => {
        console.log(event)
        fetch('https://wicked-caverns-60091.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    reset();
                }
            })
    };

    return (
        <div className="add-package">
            <Container>
                <Row xs={1} md={1} className="g-4">
                    <Col>
                        <h2>Add package</h2>
                    </Col>
                </Row>
                <Row xs={1} md={1} className="g-4">
                    <Col>
                        <div className="add-form">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input  {...register("title", { required: true })} placeholder="Package title" />
                                {errors.title && <span>This field is required</span>}

                                <textarea {...register("description", { required: true })} placeholder="Description" />
                                {errors.description && <span>This field is required</span>}

                                <input type="number" {...register("price", { min: 10, max: 3000 }, { required: true })} placeholder="Price" />
                                {errors.price && <span>This field is required</span>}

                                <input {...register("imgThumb", { required: true })} placeholder="Image Link" />
                                {errors.imgThumb && <span>This field is required</span>}


                                <input className="add-btn" type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AddPackage;