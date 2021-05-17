import React,  { useState, useEffect } from 'react'
import ProfessionalInfo from './ProInfo'
import NavBar from '../../components/navbar/index'
import {useHistory} from 'react-router-dom'

export default function ProfessionalProfile(props){ 
    const history = useHistory()
    // console.log(props.location.state.obj)
    const { name, email, social } = props.location.state.obj.userInfo
    const { experience } = props.location.state.obj.professionalInfo
    const { company } = props.location.state.obj.company
    const { position } = props.location.state.obj.role

    // console.log(props.location.state.obj.role)

    const [upcomingMeetings, setUpcomingMeetings] = useState([])

    let availObjs = [];

    async function cancelMeeting(pro_id, student_id, meetingDate, meetingTime) {
        try {
            const body = { pro_id, student_id, meetingDate, meetingTime }
            console.log(body)
            let object = '';
            let object_string = '';
            await fetch('http://localhost:5000/proMeetings/cancel', {
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
        await fetch('http://localhost:5000/proMeetings/getScheduled', {
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

        console.log(availObjs)

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
            <ProfessionalInfo name={name} company={company} role={position} social={social} email={email} yearsExperience={experience} />
            <div style={{display:"flex", flexDirection:"row"}}>
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
                                    {item.student_name}
                                </h4>
                            </div> 
                            <p style={{color:"black", display:"flex",flexWrap:"wrap", flexFlow:"column"}} className="prof_info" id="prof_company">{item.school} </p>
                            <p style={{color:"black"}}  className="prof_info" id="major">{item.major}</p>
                            <p style={{color:"black"}}  className="prof_info" id="date">{item.meetingDate}</p>
                            <p style={{color:"black"}}  className="prof_info" id="time">{item.meetingTime}</p>
                            <p style={{color:"black"}}  className="prof_info" id="zoom">Zoom id: {item.zoomID}</p>
                            <p style={{color:"black"}}  className="prof_info" id="zoom">Zoom password: {item.zoomPass}</p>

                            <div style={{marginLeft:"300px"}}>
                                <button onClick={() => cancelMeeting(item.pro_id, item.student_id, item.meetingDate_DB_FORMAT, item.meetingTime)} style={{backgroundColor:"#ab998f", color:"white"}} id="cancel_meeting" value="submit">Cancel</button> 
                            </div> 
                        </div>
                    )
                })}
            </div>
            </div>
        </>
    )
}
