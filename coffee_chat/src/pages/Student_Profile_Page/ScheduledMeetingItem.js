import React , { useEffect, useState } from 'react'
import './scheduled.css'

export default function ScheduledMeetingItem(props){
    return (
        <>
            <div style={{backgroundColor:"teal", width:"max-content"}}>
                <div style={{width:"max-content",backgroundColor:"teal"}}>
                    <h4
                        className="prof_info" id="prof_name" 
                        style={{color:"black",fontWeight:"600", fontSize:"20px"}}
                    >
                        {props.pro_name}
                    </h4>
                </div> 
                <p style={{color:"black"}} className="prof_info" id="prof_company">{props.company}</p>
                <p style={{color:"black"}}  className="prof_info" id="date">Monday June 16th, 2021</p>
                <p style={{color:"black"}}  className="prof_info" id="time">9:45am</p>       
                <div style={{marginLeft:"230px"}}>
                    <button style={{backgroundColor:"#ab998f", color:"black"}} id="cancel_meeting" value="submit">Cancel</button> 
                </div> 
            </div>
        </>
    )
}