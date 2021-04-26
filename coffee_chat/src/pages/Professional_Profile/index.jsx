import React from 'react'
import ProScheduledMeetings from './ProScheduledMeetings'
import ProfessionalInfo from './ProInfo'
import NavBar from '../../components/navbar/index'

export default function ProfessionalProfile(){ 
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
