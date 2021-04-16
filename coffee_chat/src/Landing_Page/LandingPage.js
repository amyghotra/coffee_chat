import React from 'react';
import ReactDOM from 'react-dom';
import './LandingTop.css';
import new_york from '../images/coffee.jpeg'

export default function LandingPage()
{
    return(
        <>
            <div>
                <p className ="landing_seeker" id="seeker_landing">CoffeeChat</p>
                <div id="buttons">
                    <button id ="login_button">Login</button>
                    <button id ="sign_up">Sign Up</button>
                </div>
                <div id="quote_subquote">
                    <h1 id="landing_quote">Connecting students with professionals</h1>
                    <h3 id="dare">bringing together the minds of today with the minds of tomorrow</h3>
                </div>
                <img id="new_york" src={new_york}/>
            </div>
        </>
    )
}