import React from 'react'
import './info.css'
import Fade from 'react-reveal/Fade';

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
                    <div style={{backgroundColor:"#AB998F"}}>
                        <Fade left>
                            <h3 style={{ width:"30vw", fontSize:"65px", paddingLeft:"15px", fontFamily:"'Raleway', sans-serif"}} id="student_name" className="student-profile-top-item">John Smithstudent</h3>
                        </Fade>
                    </div>
                    <div className="student-profile-top-container">
                        <Fade left>
                            <div>
                                <p className="student-profile-top-item">Oregon State : Computer Science</p>
                            </div>

                            <div>
                                <p className="student-profile-top-item" id="linkedin">https://www.linkedin.com</p> 
                            </div>
                            <div>
                                <button className="student-profile-top-item" id="edit_profile_button">edit profile</button>
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