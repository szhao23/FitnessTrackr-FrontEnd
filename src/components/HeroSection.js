import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from './videos/video-1.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted/>
            <h1> Your Fitness Journey Awaits! </h1>
            <p> What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
