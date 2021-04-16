import React from 'react';
import ReactDOM from 'react-dom';
import './LandingTop.css';

import coffee from '../images/coffee.jpeg'

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


export default function LandingAbout()
{

    return(
        
            <div className="about_us">
            <Fade>
                <h2>About Us</h2>
                <p>Paragraph here</p>
                </Fade>
            </div>
        
    )
}