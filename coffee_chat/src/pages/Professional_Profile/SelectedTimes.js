import React, { useEffect } from 'react'
import './ProEditSched.css'

export default function SelectedTimes(props){

    // useEffect(() => {
    //     // fetch all objectt from db
    // },[])

    return (
        <>
            <div id="current_sched_item">
                <p id="current_date">Date</p>
                <p id="current_time">Time</p>
                <button id="cancel_date_button">Remove</button>
            </div>
        </>
    )
}