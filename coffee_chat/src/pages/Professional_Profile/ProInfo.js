import React, { useState } from 'react'
import './proinfo.css'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function ProfessionalInfo(props){
    const history = useHistory()

    function handleClick() {
        history.push({
            pathname:"/pro-edit",
            state:{
                name:props.name,
                email:props.email,
                social:props.social,
                company:props.company,
                role:props.role,
                yearsExperience:props.yearsExperience
            }
        })
    }

    function goToSchedEdit() {
        // console.log(props)
        // console.log(localStorage)
        history.push({
            pathname:"/schedit",
            state:{
                proID: ""
            }
        })
    }

    return(
        <div id="pro">
        {/* <Fade left cascade> */}
        <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{backgroundColor:"white"}}>
                    <Fade left>
                        <h3 style={{ width:"30vw", fontSize:"65px", paddingLeft:"15px", fontFamily:"'Raleway', sans-serif", backgroundColor:"white"}} id="pro_name" className="pro-profile-top-item">{props.name}</h3>
                    </Fade>
                </div>
                <div className="pro-profile-top-container">
                    <Fade left>
                        <div style={{display:"flex",flexFlow:"column"}}>
                            <div>
                                <p className="pro-profile-top-item">{props.company}: {props.role}</p>
                            </div>
                            <div>
                                <p style={{marginTop:"30px",marginLeft:"60px"}} className="pro-profile-top-item" id="linkedin"><a href={props.social}>LinkedIn</a></p> 
                            </div>
                        </div>
                        <div style={{display:"flex",flexFlow:"column"}}>
                            <div>
                                <button onClick={handleClick} className="pro-profile-top-item" id="edit_profile_button">edit profile</button>
                            </div>
                            <div>
                                <button style={{marginTop:"10px"}} onClick={goToSchedEdit} className="pro-profile-top-item" id="edit_profile_button">set schedule</button>
                            </div>
                        </div>
                        
                    </Fade>
                </div>
            </div>
            {/* </Fade> */}
        </div>
    )
}

export default ProfessionalInfo