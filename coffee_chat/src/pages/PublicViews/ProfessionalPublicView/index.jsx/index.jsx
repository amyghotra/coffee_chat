import React from 'react'
import PublicProMeetingSelection from './PublicProMeetingSelection'
import PublicProInfo from './PublicProInfo'

class ProfessionalPublicView extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render(){
        return (
            <>
                <div id="pro_public_container">
                    <PublicProInfo />
                    <PublicProMeetingSelection />
                </div>
            </>
        )
    }
}

export default ProfessionalPublicView