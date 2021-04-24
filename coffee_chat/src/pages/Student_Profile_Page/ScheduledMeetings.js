import React from 'react'
import './scheduled.css'

class ScheduledMeetings extends React.Component {
    constructor(){
        super();
        this.state={}
    }

    render(){
        return (
            <>
                <div id="student-scheduled-meeting">
                    <div className="student-scheduled-container">
                        <div id="meetings"> 
                            <h3 style={{color:"white", fontSize:"23px"}}>Upcoming meetings</h3>
                            <div style={{color:"red"}} id="student_meeting_container">
                                <div id="professional_information">
                                    <h4 className="prof_info" id="prof_name" style={{fontWeight:"600", fontSize:"20px"}}>Professional One </h4>
                                    <p className="prof_info" id="prof_company">Company Name</p>
                                    <p className="prof_info" id="date">Monday June 16th, 2021</p>
                                    <p className="prof_info" id="time">9:45am</p>       
                                    <div style={{marginLeft:"230px"}}>
                                        <button id="cancel_meeting" value="submit">Cancel</button> 
                                    </div>                         
                                </div>
                                <div id="professional_information">
                                    <h4 className="prof_info" id="prof_name" style={{fontWeight:"600", fontSize:"20px"}}>Professional One </h4>
                                    <p className="prof_info" id="prof_company">Company Name</p>
                                    <p className="prof_info" id="date">Monday June 16th, 2021</p>
                                    <p className="prof_info" id="time">9:45am</p>       
                                    <div style={{marginLeft:"230px"}}>
                                        <button id="cancel_meeting" value="submit">Cancel</button> 
                                    </div>                         
                                </div>
                                <div id="professional_information">
                                    <h4 className="prof_info" id="prof_name" style={{fontWeight:"600", fontSize:"20px"}}>Professional One </h4>
                                    <p className="prof_info" id="prof_company">Company Name</p>
                                    <p className="prof_info" id="date">Monday June 16th, 2021</p>
                                    <p className="prof_info" id="time">9:45am</p>       
                                    <div style={{marginLeft:"230px"}}>
                                        <button id="cancel_meeting" value="submit">Cancel</button> 
                                    </div>                         
                                </div>
                                <div id="professional_information">
                                    <h4 className="prof_info" id="prof_name" style={{fontWeight:"600", fontSize:"20px"}}>Professional One </h4>
                                    <p className="prof_info" id="prof_company">Company Name</p>
                                    <p className="prof_info" id="date">Monday June 16th, 2021</p>
                                    <p className="prof_info" id="time">9:45am</p>       
                                    <div style={{marginLeft:"230px"}}>
                                        <button id="cancel_meeting" value="submit">Cancel</button> 
                                    </div>                         
                                </div>
                                <div id="professional_information">
                                    <h4 className="prof_info" id="prof_name" style={{fontWeight:"600", fontSize:"20px"}}>Professional One </h4>
                                    <p className="prof_info" id="prof_company">Company Name</p>
                                    <p className="prof_info" id="date">Monday June 16th, 2021</p>
                                    <p className="prof_info" id="time">9:45am</p>       
                                    <div style={{marginLeft:"230px"}}>
                                        <button id="cancel_meeting" value="submit">Cancel</button> 
                                    </div>                         
                                </div>
                                <div id="professional_information">
                                    <h4 className="prof_info" id="prof_name" style={{fontWeight:"600", fontSize:"20px"}}>Professional One </h4>
                                    <p className="prof_info" id="prof_company">Company Name</p>
                                    <p className="prof_info" id="date">Monday June 16th, 2021</p>
                                    <p className="prof_info" id="time">9:45am</p>       
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

export default ScheduledMeetings