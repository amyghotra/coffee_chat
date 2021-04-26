import React from 'react';
import StudentInfo from './StudentInfo'
import NewMeetings from './NewMeeting'
import ScheduledMeetings from './ScheduledMeetings'
import NavBar from '../../components/navbar/index'

export default function Student_Profile(){
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