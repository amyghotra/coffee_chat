import React, {useEffect, useState} from 'react';
import StudentInfo from './StudentInfo'
import NewMeetings from './NewMeeting'
// import ScheduledMeetings from './ScheduledMeetings'
// import './scheduled.css'
import './index.css'
import NavBar from '../../components/navbar/index'
import {useHistory, location} from 'react-router-dom'

export default function Student_Profile(props){
    const history = useHistory()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const { school, major } = props.location.state.obj.studentInfo
    const { name, email, social } = props.location.state.obj.userInfo
    
    const [upcomingMeetings, setUpcomingMeetings] = useState([])

    const [meetingInfo, setMeetingInfo] = useState([])

    let availObjs = [];

    let arr = []

    async function cancelMeeting(pro_id, student_id, meetingDate, meetingTime) {
        try {
            const body = { pro_id, student_id, meetingDate, meetingTime }
            console.log(body)
            let object = '';
            let object_string = '';
            await fetch('http://localhost:5000/studentMeetings/cancel', {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
                .then((res) => res.text())
                .then((text) => (object_string = text));
            object = JSON.parse(object_string);
            history.go(0)
        } catch (err) {
            console.log(err)
        }
    }

    async function getMeetings() {
        try {
        let object_string = '';
        await fetch('http://localhost:5000/studentMeetings/getScheduled', {
          method: 'GET',
          headers: { jwtToken: localStorage.token },
        })
          .then((res) => res.text())
          .then((text) => {
            object_string = text;
          })
          .then((text) => {
            availObjs = JSON.parse(object_string);
          });

        setUpcomingMeetings(availObjs);
        console.log("upcomingMeetings")
        console.log(upcomingMeetings)
        console.log("upcomingMeetings")

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getMeetings()
    },[])

    return(
        <>
        <NavBar />
            <StudentInfo name={name} school={school} major={major} social={social} email={email} />
            <div id="make-row">
                <div id="new_meets" style={{display:"flex", flexDirection:"column"}}>
                <h1 id="upcoming_title">Upcoming Meetings</h1>
                {upcomingMeetings.map((item) => {
                    return(
                        <div id="meetings_container">
                            <div style={{width:"350px"}}>
                                <h4
                                    className="prof_info" id="prof_name" 
                                    style={{color:"black",fontWeight:"600", fontSize:"20px"}}
                                >
                                    {item.pro_name}
                                </h4>
                            </div> 
                            <p style={{color:"black"}} className="prof_info" id="prof_company">{item.company} : {item.position}</p>
                            <p style={{color:"black"}}  className="prof_info" id="date">{item.meetingDate}</p>
                            <p style={{color:"black"}}  className="prof_info" id="time">{item.meetingTime}</p>
                            <p style={{color:"black"}}  className="prof_info" id="zoom">Zoom id: {item.zoomID}</p>
                            <p style={{color:"black"}}  className="prof_info" id="zoom">Zoom password: {item.zoomPass}</p>

                            <div style={{marginLeft:"250px"}}>
                                <button onClick={() => cancelMeeting(item.pro_id, item.student_id, item.meetingDate_DB_FORMAT, item.meetingTime)} style={{backgroundColor:"#ab998f", color:"white"}} id="cancel_meeting" value="submit">Cancel</button> 
                            </div> 
                        </div>
                    )
                })}
                </div>
                <div id="scheduled_meets">
                    <NewMeetings />
                </div>
            </div>
        </>
    )
}