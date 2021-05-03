import React, { useState, useEffect } from 'react'
import {Redirect, location, useHistory} from 'react-router-dom'

export default function Dashboard(props){
    const history = useHistory()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        if(props.location.state.isAuth !== 'undefined') {
            setIsAuthenticated(props.location.state.isAuth)
            if(props.location.state.is_student) {
                history.push({
                    pathname:'/studentprofile',
                    state:{ isAuth: true}
                })
            } else {
                history.push({
                    pathname:'/professionalprofile',
                    state:{ isAuth: true}
                })
            }
        } else {
            // setIsAuthenticated(false)
            history.push('/landing')
        }
    }, [])

    if(!isAuthenticated) {
        <Redirect to="/landing" />
    }

    return(
        <>
            <h1>Dashboard</h1>
        </>
    )
}