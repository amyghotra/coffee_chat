import React from 'react';
// import ReactDOM from 'react-dom';
// import './LandingTop.css';
import new_york from '../../images/coffee.jpeg'

// import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// import Bounce from 'react-reveal/Bounce';

export default function LandingInfo()
{
    return(
        <>
            <div>
                <p className ="landing_coffee_chat" id="coffee_chat_landing">CoffeeChat</p>
                <div id="buttons">
                    <button id ="login_button">Login</button>
                    <button id ="sign_up">Sign Up</button>
                </div>
                <Fade right cascade>
                <div id="quote_subquote">
                    <h1 id="landing_quote">Connecting students with professionals</h1>
                    <h3 id="dare">bringing together the minds of today with the minds of tomorrow</h3>
                </div>
                </Fade>
                <Fade>
                    <img id="new_york" src={new_york} alt="New York City" /> 
                </Fade>
            </div>
        </>
    )
}