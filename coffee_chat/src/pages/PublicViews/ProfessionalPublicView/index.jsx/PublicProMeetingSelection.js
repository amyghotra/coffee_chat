import React from 'react'
import './PublicProMeetingSelection.css'

class PublicProMeetingSelection extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render(){
        return (
            <>
                <div id="public_pro_availability">
                    <div className="public_avail_container">
                        <div id="public_view_avail"> 
                            <h3 style={{color:"black", fontSize:"23px"}}>Availability</h3>
                            <div id="meeting_time_container">
                                <div id="meeting_info_container">
                                    <p className="meeting_info" id="date">Monday June 16th, 2021</p>
                                    <p className="meeting_info" id="time">9:45am</p>       
                                    <div style={{marginLeft:"230px"}}>
                                        <button id="select_availability" value="submit">Select</button> 
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

export default PublicProMeetingSelection