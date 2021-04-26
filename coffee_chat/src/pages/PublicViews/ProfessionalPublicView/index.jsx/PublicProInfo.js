import React from 'react'
import './PublicProInfo.css'

import Fade from 'react-reveal/Fade';

class PublicProInfo extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render(){
        return (
            <>
                <div id="public_pro">
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{backgroundColor:"white"}}>
                            <Fade left>
                                <h3 style={{ width:"30vw", fontSize:"65px", paddingLeft:"15px", fontFamily:"'Raleway', sans-serif", color:"#283044"}} id="public_pro_name" className="public_pro-profile-top-item">Katy Johnsonpro</h3>
                            </Fade>
                        </div>
                        <div className="public_pro-profile-top-container">
                            <Fade left>
                                <div>
                                    <p className="public_pro-profile-top-item">Microsoft: Senior Engineer</p>
                                </div>

                                <div>
                                    <p className="public_pro-profile-top-item" id="public_linkedin">https://www.linkedin.com</p> 
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PublicProInfo