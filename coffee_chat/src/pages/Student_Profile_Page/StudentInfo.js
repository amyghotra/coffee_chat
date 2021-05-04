import React from 'react'
import './info.css'
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom'

class StudentInfo extends React.Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div id="student_profile">
            {/* <Fade left cascade> */}
            <div style={{display:"flex", flexDirection:"row"}}>
                    <div style={{backgroundColor:"white"}}>
                        <Fade left>
                            <h3 style={{ width:"30vw", fontSize:"65px", paddingLeft:"15px", fontFamily:"'Raleway', sans-serif"}} id="student_name" className="student-profile-top-item">{this.props.name}</h3>
                        </Fade>
                    </div>
                    <div className="student-profile-top-container">
                        <Fade left>
                            <div>
                                <p className="student-profile-top-item">{this.props.school} : {this.props.major}</p>
                            </div>

                            <div>
                                <a href={this.state.social}><p className="student-profile-top-item" id="linkedin">LinkedIn</p> </a>
                            </div>
                            <div>
                                <Link to='/student_edit'><button className="student-profile-top-item" id="edit_profile_button">edit profile</button></Link> 
                            </div>
                        </Fade>
                    </div>
                </div>
                {/* </Fade> */}
            </div>
        )
    }
}

export default StudentInfo