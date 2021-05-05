import React, {useEffect, useState} from 'react';
import StudentInfo from './StudentInfo'
import NewMeetings from './NewMeeting'
import ScheduledMeetings from './ScheduledMeetings'
import NavBar from '../../components/navbar/index'
import {useHistory, location} from 'react-router-dom'

export default function Student_Profile(props){
    const history = useHistory()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const { school, major } = props.location.state.obj.studentInfo
    const { name, email, social } = props.location.state.obj.userInfo
    // console.log(props.location.state.obj.studentInfo)
    // console.log(props.location.state.obj.userInfo)

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
            <StudentInfo name={name} school={school} major={major} social={social} email={email} />
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