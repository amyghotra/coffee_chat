import React, { useState, useEffect } from 'react'
import {Redirect, location, useHistory} from 'react-router-dom'
import ProfessionalProfile from '../pages/Professional_Profile/index'

export default function Dashboard(props){
    const history = useHistory()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    async function getName(){
        let object = ""
        let obj_string = ""
        try {
            const response = await fetch("http://localhost:5000/dashboard/", {
                method:"GET",
                headers:{ jwtToken: localStorage.token}
            })
                .then(res => res.text())
                .then(text => obj_string = text)
                // .then(text => {object = text; obj_string = text})
            // const something = await response
            object = JSON.parse(obj_string)
            // console.log(object)

            const user_type = obj_string.split('"')[1]
            // const user_name = object.pro_name
            // console.log(obj_string)

            if(object.professionalInfo) {
                history.push({
                    pathname:"/professionalprofile",
                    state:{
                        isAuth: true,
                        obj: object
                    }
                })
            } else {
                history.push({
                    pathname:"/studentprofile",
                    state:{
                        isAuth: true,
                        obj: object
                    }
                })
            }

        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() =>{
        getName()
    }, [])

    // useEffect(() => {
    //     if(props.location.state.isAuth !== 'undefined') {
    //         setIsAuthenticated(props.location.state.isAuth)
    //         if(props.location.state.is_student) {
    //             history.push({
    //                 pathname:'/studentprofile',
    //                 state:{ isAuth: true}
    //             })
    //         } else {
    //             history.push({
    //                 pathname:'/professionalprofile',
    //                 state:{ isAuth: true}
    //             })
    //         }
    //     } else {
    //         // setIsAuthenticated(false)
    //         history.push('/landing')
    //     }
    // }, [])

    if(!isAuthenticated) {
        <Redirect to="/landing" />
    }

    return(
        <>
            <h1>Dashboard</h1>
        </>
    )
}