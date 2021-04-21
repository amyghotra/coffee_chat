import React from 'react'
import ProScheduledMeetings from './ProScheduledMeetings'
import ProfessionalInfo from './ProInfo'

class ProfessionalProfile extends React.Component {
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <>
                <ProfessionalInfo />
                <div style={{display:"flex", flexDirection:"row"}}>
                    {/* <div style={{backgroundColor:"#0000", height:"90px"}}>
                        <button  style={{backgroundColor:"#0000", height:"90px"}}>Edit sched</button>
                    </div> */}
                    <ProScheduledMeetings />
                </div>
            </>
        )
    }
}

export default ProfessionalProfile