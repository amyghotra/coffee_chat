import React from 'react'
import './ProEditSched.css'

class ProEditSched extends React.Component{
    constructor() {
        super();
        this.state={
            date:"",
            time:""
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    render(){
        return(
            <>
                <div id="sched_info">
                    <div id="pro_edit_sched_container">
                        <h2 id="edit_sched_title">Edit your availability</h2>
                        <div id="sched_form">
                            <form id="schedule_selection">
                                <div id="date_picker">
                                    <label>Date (mm-dd-yyyy):</label>
                                    <input id="text_input" type="text" />
                                </div>

                                <br />

                                <div id="time_picker">
                                    <label>Time (hh:mm):</label>
                                    <input id="text_input"  type="text" />
                                </div>

                                <br />
                                <button id="submit_time_button" type="submit">submit</button>
                            </form>
                        </div>
                    </div>
                    
                    <div id="current_sched">
                        <h2 id="current_sched_title">Currently selected</h2>
                        <div id="current_sched_list">
                            <div id="current_sched_item">
                                <p id="current_date">Date</p>
                                <p id="current_time">Time</p>
                                <button id="cancel_date_button">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProEditSched