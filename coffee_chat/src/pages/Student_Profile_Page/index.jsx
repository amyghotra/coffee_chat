import React from 'react';
import StudentInfo from './StudentInfo'
import NewMeetings from './NewMeeting'
import ScheduledMeetings from './ScheduledMeetings'
// import Fade from 'react-reveal/Fade';

class Student_Profile extends React.Component{
    constructor()
    {
        super();
        this.state={}
    }

    render(){
        return(
            <>
                    <StudentInfo />
                <div id="make-row" style={{display:"flex", flexDirection:"column"}}>
                    <div id="new_meets">
                        <ScheduledMeetings />
                    </div>
                    <div id="scheduled_meets">
                        <NewMeetings />
                    </div>
                </div>
            </>
        )
    }
}

export default Student_Profile