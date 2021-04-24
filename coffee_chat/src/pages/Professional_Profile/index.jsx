import React from 'react'
import ProScheduledMeetings from './ProScheduledMeetings'
import ProfessionalInfo from './ProInfo'
import NavBar from '../../components/navbar/index'

class ProfessionalProfile extends React.Component {
    constructor(){
        super();
        this.state={}
    }

    render(){
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
}

export default ProfessionalProfile