import React from 'react'
import './info.css'
import Fade from 'react-reveal/Fade';
import { Link, useHistory, useLocation } from 'react-router-dom'

function StudentInfo(props){
    const history = useHistory()

    function handleClick() {
        history.push({
            pathname:"/student_edit",
            state:{
                name:props.name,
                email:props.email,
                social:props.social,
                school:props.school,
                major:props.major
            }
        })
    }

    return(
        <div id="student_profile">
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{backgroundColor:"white"}}>
                    <Fade left>
                        <h3 style={{ width:"30vw", fontSize:"65px", paddingLeft:"15px", fontFamily:"'Raleway', sans-serif"}} id="student_name" className="student-profile-top-item">{props.name}</h3>
                    </Fade>
                </div>
                <div className="student-profile-top-container">
                    <Fade left>
                        <div>
                            <p className="student-profile-top-item">{props.school} : {props.major}</p>
                        </div>

                        <div>
                            <a href={props.social}><p className="student-profile-top-item" id="linkedin">LinkedIn</p> </a>
                        </div>
                        <div>
                            {/* <Link to='/student_edit'><button className="student-profile-top-item" id="edit_profile_button" onClick={handleClick}>edit profile</button></Link> */}

                            <button className="student-profile-top-item" id="edit_profile_button" onClick={handleClick}>edit profile</button> 
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default StudentInfo