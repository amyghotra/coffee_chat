import React from 'react';
// import ReactDOM from 'react-dom';
import './LandingTop.css';

import newyork from '../../images/newyork.jpeg';
import presentation from '../../images/presentation.jpeg';
import chat from '../../images/chat.jpeg';
import display from '../../images/display.jpeg';

// import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// import Bounce from 'react-reveal/Bounce';

export default function Using()
{
    return(
        <>
            <div className="using">
            <h2 className="section_title">Using CoffeeChat</h2>
                <Fade left cascade>
                <div id="four_imgs">
                    <div className="using_imgs">
                        <img id="first_img" src={newyork} alt="New York" />
                        <p className="desc">here is some text</p>
                    </div>
                    <div className="using_imgs">
                        <img id="second_img" src={presentation} alt="New York" />
                        <p className="desc">here is some text</p>
                    </div>
                    <div className="using_imgs">
                        <img id="third_img" src={display} alt="New York" />
                        <p className="desc">here is some text</p>
                    </div>
                    <div className="using_imgs">
                        <img id="fourth_img" src={chat} alt="New York" />
                        <p className="desc">here is some text</p>
                    </div>
                </div>
                </Fade>
            </div>
        </>
    )
}