import React from 'react'
import './scheduled.css'
import Fade from 'react-reveal/Fade';
import ScheduledMeetingItem from  './ScheduledMeetingItem'

class ScheduledMeetings extends React.Component {
    constructor(){
        super();
        this.state={
            meetings:[]
        }
    }

    // componentDidMount() {
    //     // fetch user information for the scheduled meetings
    //     // then add the information to this.state.meetings
    //     // this.state.meetings should be populated with meeting objects
    //     // meeting objects should contain the information in the this.state of scheduledmeetingitem
    //     // after this.state.meetings has been appropriately populated, call another function to call 
    //     // the object that will create the scheduled meeting items
    // }

    render(){
        return (
            <>
                <div id="student-scheduled-meeting">
                    <Fade bottom>
                        <div className="student-scheduled-container">
                            <div id="meetings"> 
                                <h3 style={{color:"white", fontSize:"25px"}}>Upcoming meetings </h3>
                                {/* <em style={{color:"white", fontSize:"15px"}}>(click name for info)</em> */}
                                
                                <Fade right cascade>
                                    <div id="student_meeting_container">

                                    {/* instead of calling individual objects, we either
                                    do a .map here or we do that outside of the return in the render,
                                    store the generated objs in a var, and then output them here */}

                                        <ScheduledMeetingItem />  

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