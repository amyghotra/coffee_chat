import React from 'react'
import './new_meeting.css'

class NewMeetings extends React.Component {
    constructor(){
        super();
        this.state={}
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        //
    }

    render() {
        return (
            <>
                <div id="new_meeting">
                    <div className="new-meeting-container">
                        <div id="searches"> 
                            <h3 style={{color:"white", fontSize:"23px"}}>Schedule a new meeting</h3>
                            <div>
                                <p class="search_title">Search by profession: </p>
                                <p class="search_title">Search by company: </p>
                                <button class="search_button" value="submit">Search</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewMeetings