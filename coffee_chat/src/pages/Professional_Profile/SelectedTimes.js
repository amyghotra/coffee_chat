import React, { useEffect } from 'react'
import './ProEditSched.css'

export default function SelectedTimes(props){

    // useEffect(() => {
    //     // fetch all objectt from db
    //     console.log("finally got in here")
    //     console.log(props)
    // },[])

    return (
        <>
            <div id="current_sched_item">
                <p id="current_date">Date: {props.date}</p>
                <p id="current_time">Time: {props.time}</p>
                <button id="cancel_date_button">Remove</button>
            </div>
        </>
    )
}