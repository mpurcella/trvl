import React from 'react';
import Button from './Button';
import './Hero.css';

let Hero = () => {
    return (
        <div className="hero">
            <div className='hero-container'>
                <h1 className='hero-heading'>Adventure Awaits</h1>
                <p className='hero-text'>What are you waiting For?</p>
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
        </div>
    );
}

export default Hero;