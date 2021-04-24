import React from 'react'
import './proscheduled.css'

class ProScheduledMeetings extends React.Component {
    constructor(){
        super();
        this.state={}
    }

    render(){
        return (
            <>
                <div id="pro-scheduled-meeting">
                    <div className="pro-scheduled-container">
                        <div id="pro_meetings"> 
                            <h3 style={{color:"black", fontSize:"23px"}}>Upcoming meetings</h3>
                            <div id="pro_meeting_info_container">
                                <div id="student_information">
                                    <h4 className="student_info" id="student_name" style={{fontWeight:"600", fontSize:"20px"}}>Student One </h4>
                                    <p className="student_info" id="student_school">School Name</p>
                                    <p className="student_info" id="date">Monday June 16th, 2021</p>
                                    <p className="student_info" id="time">9:45am</p>       
                                    <div style={{marginLeft:"230px"}}>
                                        <button id="cancel_meeting" value="submit">Cancel</button> 
                                    </div>                         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProScheduledMeetings