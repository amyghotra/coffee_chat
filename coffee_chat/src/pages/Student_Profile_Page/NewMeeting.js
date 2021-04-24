import React from 'react'
import './new_meeting.css'
import Fade from 'react-reveal/Fade';

class NewMeetings extends React.Component {
    constructor(){
        super();
        this.state= {
            profession:"",
            company_name: ""
        }
        this.onChange = this.onChange.bind(this)
        this.searchSubmitted = this.searchSubmitted.bind(this)
    }

    onChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    searchSubmitted(){
        alert("submitted",2000)
    }

    render() {
        return (
            <>
                <div id="new_meeting">
                    <Fade bottom> 
                        <div className="new-meeting-container">
                            <div id="searches"> 
                                <h3 style={{color:"black", fontSize:"25px"}}>Schedule a new meeting</h3>
                                <form  id="search_form" onSubmit={this.searchSubmitted}>
                                    <label className="search_title">Search by profession:</label>
                                    <input className="search_input_field" name="profession" value={this.state.profession} type="text" onChange={this.onChange} />

                                    <label className="search_title">Search by company: </label>
                                    <input className="search_input_field" name="company_name" value={this.state.company_name} type="text" onChange={this.onChange} />
                                    
                                    {/* <div> */}
                                        <button type="submit" id="search_button" value="submit"><p style={{marginTop:"-40px", marginLeft:"-55px", fontSize:"18px"}}>Search</p></button> 
                                    {/* </div> */}
                                    
                                </form>
                            </div>
                        </div>
                    </Fade>
                </div>
            </>
        )
    }
}

export default NewMeetings