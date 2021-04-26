import React from 'react'
import PublicProMeetingSelection from './PublicProMeetingSelection'
import PublicProInfo from './PublicProInfo'
import NavBar from '../../../../components/navbar/index.jsx'

class ProfessionalPublicView extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render(){
        return (
            <>
                <NavBar />
                <div id="pro_public_container">
                    <PublicProInfo />
                    <PublicProMeetingSelection />
                </div>
            </>
        )
    }
}

export default ProfessionalPublicView