import React from 'react';
import Button from './Button';
import './Hero.css';
import heroImg from '../images/img-home.jpg';

let Hero = () => {
    return (
        <div className='hero-container'>
            <img src={heroImg} alt="Beach"/>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting For?</p>
            <div className="hero-btns">
                <Button className='btn' buttonStyle='btn-outline' buttonSize='btn-large'>
                    Get Started
                </Button>
                <Button className='btn' buttonStyle='btn-primary' buttonSize='btn-large'>
                    Watch Trailer
                        <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default Hero;