import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                {/* 1st slider  */}
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/18Kj91V/banner2.jpg"
                        alt="First slide"
                    />
                    <div className="carousel-text shadow">
                        <h3>Travel Your Live Dream</h3>
                        <p>We wull give you the company to explore your dream to travel the word in a very resonable price</p>
                        <Link to="/appointment" className='banner-btn'>Find Now</Link>
                    </div>
                </Carousel.Item>

                {/* 2nd slider  */}
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/XJpbNpG/banner1.jpg"
                        alt="First slide"
                    />
                    <div className="carousel-text  shadow">
                        <h3>Discover The Unseen, Unknown</h3>
                        <p>We have best plan to travel some selected places where you can create you discover print.</p>
                        <Link to="/appointment" className='banner-btn'>Find Now</Link>
                    </div>
                </Carousel.Item>

                {/* 3rd slider  */}
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/QXG8pNh/banner3.jpg"
                        alt="First slide"
                    />
                    <div className="carousel-text  shadow">
                        <h3>Feel The Language of Nature</h3>
                        <p>We have the best facilities to give you the feeling of having a memorable tour to the nature.</p>
                        <Link to="/appointment" className='banner-btn'>Find Now</Link>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;