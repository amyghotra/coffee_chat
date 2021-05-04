import React, { useState, useEffect } from 'react'
import ProScheduledMeetings from './ProScheduledMeetings'
import ProfessionalInfo from './ProInfo'
import NavBar from '../../components/navbar/index'
import {useHistory, location} from 'react-router-dom'

export default function ProfessionalProfile(props){ 
    // const { name } = props
    // console.log(`person name is : ${props.location.state.name}`)
    const str = JSON.parse(props.location.state.obj)
    console.log(str)
    const { pro_name, pro_company, pro_role, pro_social } = str
    console.log(str.pro_name)
    
    const history = useHistory()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

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
            <ProfessionalInfo name={str.pro_name} company={pro_company} role={pro_role} social={pro_social} />
            <div style={{display:"flex", flexDirection:"row"}}>
                <ProScheduledMeetings />
            </div>
        </>
    )
}
