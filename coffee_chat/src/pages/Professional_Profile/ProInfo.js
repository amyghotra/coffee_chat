import React from 'react'
import './proinfo.css'
import Fade from 'react-reveal/Fade';
import ProEditInfo  from './ProEditInfo'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

class ProfessionalInfo extends React.Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div id="pro">
            {/* <Fade left cascade> */}
            <div style={{display:"flex", flexDirection:"row"}}>
                    <div style={{backgroundColor:"#283044"}}>
                        <Fade left>
                            <h3 style={{ width:"30vw", fontSize:"65px", paddingLeft:"15px", fontFamily:"'Raleway', sans-serif"}} id="pro_name" className="pro-profile-top-item">Katy Johnsonpro</h3>
                        </Fade>
                    </div>
                    <div className="pro-profile-top-container">
                        <Fade left>
                            <div>
                                <p className="pro-profile-top-item">Microsoft: Senior Engineer</p>
                            </div>

                            <div>
                                <p className="pro-profile-top-item" id="linkedin">https://www.linkedin.com</p> 
                            </div>
                            <div>
                                <div>
                                    <Link to='./pro-edit'><button className="pro-profile-top-item" id="edit_profile_button">edit profile</button></Link>
                                </div>
                                <div>
                                    <Link to='./schedit'><button className="pro-profile-top-item" id="edit_profile_button">set schedule</button></Link>
                                </div>
                            </div>
                            
                        </Fade>
                    </div>
                </div>
                {/* </Fade> */}
            </div>
        )
    }
}

export default ProfessionalInfo