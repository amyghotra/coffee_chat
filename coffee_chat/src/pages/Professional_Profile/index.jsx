import React, { useState, useEffect } from 'react'
import ProScheduledMeetings from './ProScheduledMeetings'
import ProfessionalInfo from './ProInfo'
import NavBar from '../../components/navbar/index'
import {useHistory, location} from 'react-router-dom'

export default function ProfessionalProfile(props){ 
    const history = useHistory()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        if(props.location.state.isAuth !== 'undefined') {
            setIsAuthenticated(props.location.state.isAuth)
        } else {
            // setIsAuthenticated(false)
            history.push('/sign-in')
        }
    }, [])

    return(
        <>
            <NavBar />
            <ProfessionalInfo />
            <div style={{display:"flex", flexDirection:"row"}}>
                <ProScheduledMeetings />
            </div>
        </>
    )
}
