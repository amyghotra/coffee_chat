import React, {useEffect, useState} from 'react';
import StudentInfo from './StudentInfo'
import NewMeetings from './NewMeeting'
import ScheduledMeetings from './ScheduledMeetings'
import NavBar from '../../components/navbar/index'
import {useHistory, location} from 'react-router-dom'

export default function Student_Profile(props){
    const history = useHistory()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    // console.log(`person name is : ${props.location.state.name}`)
    const str = JSON.parse(props.location.state.obj)
    const { student_name, student_school, student_major, student_social } = str
    // console.log(str)

    // useEffect(() => {
    //     if(props.location.state.isAuth !== 'undefined') {
    //         setIsAuthenticated(props.location.state.isAuth)
    //     } else {
    //         // setIsAuthenticated(false)
    //         history.push('/sign-in')
    //     }
    // }, [])

    return(
        <>
        <NavBar />
            <StudentInfo name={student_name} school={student_school} major={student_major} social={student_social} />
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