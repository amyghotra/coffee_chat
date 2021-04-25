import React from 'react'
import './scheduled.css'
import Fade from 'react-reveal/Fade';

class ScheduledMeetings extends React.Component {
    constructor(){
        super();
        this.state={}
    }

    render(){
        return (
            <>
                <div id="student-scheduled-meeting">
                <Fade bottom>
                    <div className="student-scheduled-container">
                        <div id="meetings"> 
                            <h3 style={{color:"white", fontSize:"25px"}}>Upcoming meetings</h3>
                            <Fade right cascade>
                                <div id="student_meeting_container">    
                                        <div id="professional_information">
                                            <h4 className="prof_info" id="prof_name" style={{fontWeight:"600", fontSize:"20px"}}>Professional One </h4>
                                            <p className="prof_info" id="prof_company">Company Name</p>
                                            <p className="prof_info" id="date">Monday June 16th, 2021</p>
                                            <p className="prof_info" id="time">9:45am</p>       
                                            <div style={{marginLeft:"230px"}}>
                                                <button style={{backgroundColor:"#ab998f", color:"white"}} id="cancel_meeting" value="submit">Cancel</button> 
                                            </div>                         
                                        </div>

                                        <div id="professional_information">
                                            <h4 className="prof_info" id="prof_name" style={{fontWeight:"600", fontSize:"20px"}}>Professional One </h4>
                                            <p className="prof_info" id="prof_company">Company Name</p>
                                            <p className="prof_info" id="date">Monday June 16th, 2021</p>
                                            <p className="prof_info" id="time">9:45am</p>       
                                            <div style={{marginLeft:"230px"}}>
                                                <button style={{backgroundColor:"#ab998f", color:"white"}} id="cancel_meeting" value="submit">Cancel</button> 
                                            </div>                         
                                        </div>

                                        <div id="professional_information">
                                            <h4 className="prof_info" id="prof_name" style={{fontWeight:"600", fontSize:"20px"}}>Professional One </h4>
                                            <p className="prof_info" id="prof_company">Company Name</p>
                                            <p className="prof_info" id="date">Monday June 16th, 2021</p>
                                            <p className="prof_info" id="time">9:45am</p>       
                                            <div style={{marginLeft:"230px"}}>
                                                <button style={{backgroundColor:"#ab998f", color:"white"}} id="cancel_meeting" value="submit">Cancel</button> 
                                            </div>                         
                                        </div>

                                        <div id="professional_information">
                                            <h4 className="prof_info" id="prof_name" style={{fontWeight:"600", fontSize:"20px"}}>Professional One </h4>
                                            <p className="prof_info" id="prof_company">Company Name</p>
                                            <p className="prof_info" id="date">Monday June 16th, 2021</p>
                                            <p className="prof_info" id="time">9:45am</p>       
                                            <div style={{marginLeft:"230px"}}>
                                                <button style={{backgroundColor:"#ab998f", color:"white"}} id="cancel_meeting" value="submit">Cancel</button> 
                                            </div>                         
                                        </div>

                                        <div id="professional_information">
                                            <h4 className="prof_info" id="prof_name" style={{fontWeight:"600", fontSize:"20px"}}>Professional One </h4>
                                            <p className="prof_info" id="prof_company">Company Name</p>
                                            <p className="prof_info" id="date">Monday June 16th, 2021</p>
                                            <p className="prof_info" id="time">9:45am</p>       
                                            <div style={{marginLeft:"230px"}}>
                                                <button style={{backgroundColor:"#ab998f", color:"white"}} id="cancel_meeting" value="submit">Cancel</button> 
                                            </div>                         
                                        </div>
                                    

                                </div>
                            </Fade>
                        </div>
                    </div>
                    </Fade>
                </div>
            </>
        )
    }
}

export default ScheduledMeetings