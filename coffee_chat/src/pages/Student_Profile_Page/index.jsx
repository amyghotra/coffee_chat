import React from 'react';
import StudentInfo from './StudentInfo'
import NewMeetings from './NewMeeting'
import ScheduledMeetings from './ScheduledMeetings'
import NavBar from '../../components/navbar/index'

class Student_Profile extends React.Component{
    constructor()
    {
        super();
        this.state={}
    }

    render(){
        return(
            <>
            <NavBar />
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