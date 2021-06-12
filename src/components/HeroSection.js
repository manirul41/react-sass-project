import React from 'react';
import Button from './Button';

function HeroSection() {
    return (
        <div
            className="hero-container"
            style={{ background: `url("/images/img-home.webp") center center/cover no-repeat` }}
        >
            {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
            <h1>GO BEYOND</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    onClick={console.log('hm')}
                >
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
