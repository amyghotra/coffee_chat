import React from 'react'
import './proscheduled.css'
import Fade from 'react-reveal/Fade';
import ProScheduledItems from './ProScheduledItems'

class ProScheduledMeetings extends React.Component {
    constructor(){
        super();
        this.state={
            meetings:[],
        }
    }

    // componentDidMount() {
    //     // fetch meetings objects from api and store them in this.state.meetings
    // }

    render(){
        return (
            <>
            <Fade bottom>
                <div id="pro-scheduled-meeting">
                    <div className="pro-scheduled-container">
                        <div id="pro_meetings"> 
                            <h3 style={{color:"white", fontSize:"25px"}}>Upcoming meetings </h3>
                            {/* <em style={{color:"white", fontSize:"15px"}}>(click name for info)</em> */}

                            <Fade right cascade>
                            <div id="pro_meeting_info_container">

                                 <ProScheduledItems />


                            </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                </Fade>
            </>
        )
    }
}

export default ProScheduledMeetings