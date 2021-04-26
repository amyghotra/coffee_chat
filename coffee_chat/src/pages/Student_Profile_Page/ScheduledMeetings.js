import React from 'react'
import './scheduled.css'
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor:"#ab998f",
      borderRadius:"7px",
      color:"black"
    }
};

class ScheduledMeetings extends React.Component {
    constructor(){
        super();
        this.state={
            professional_name:"",
            company:"",
            role:"",
            meeting_date:"",
            meeting_time:"",
            modalIsOpen: false
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal(){
        this.setState({modalIsOpen: true})
    }

    closeModal() {
        this.setState({modalIsOpen: false})
    }

    handleCancel(){
        // code to cancel meeting for both parties
        alert("meeting has been cancelled",2000)
    }

    render(){
        return (
            <>
                <div id="student-scheduled-meeting">
                <Fade bottom>
                    <div className="student-scheduled-container">
                        <div id="meetings"> 
                            <h3 style={{color:"white", fontSize:"25px"}}>Upcoming meetings <em style={{color:"white", fontSize:"15px"}}>(click name for info)</em></h3>
                            
                            <Fade right cascade>
                                <div id="student_meeting_container">    

                                        <div id="professional_information">
                                            <div style={{width:"max-content"}}>
                                                <h4
                                                    onClick={this.openModal}
                                                    className="prof_info" id="prof_name" 
                                                    style={{fontWeight:"600", fontSize:"20px"}}
                                                >
                                                    Professional One
                                                </h4>
                                                <Modal 
                                                    isOpen={this.state.modalIsOpen}
                                                    onRequestClose={this.closeModal}
                                                    contentLabel="Example Modal"
                                                    style={customStyles}
                                                >
                                                    <div id="professional_modal_container">
                                                        <h4 id="modal_professional_name">Professional Name</h4>
                                                        <p className="modal_prof_info" id="modal_prof_comp_role">Company Name: Role</p>
                                                        <p className="modal_prof_info" id="modal_prof_linkedin"><a href="www.google.com" target="_blank">LinkedIn</a></p>
                                                    </div>
                                                </Modal>
                                            </div> 
                                            <p className="prof_info" id="prof_company">Company Name</p>
                                            <p className="prof_info" id="date">Monday June 16th, 2021</p>
                                            <p className="prof_info" id="time">9:45am</p>       
                                            <div style={{marginLeft:"230px"}}>
                                                <button onClick={this.handleCancel} style={{backgroundColor:"#ab998f", color:"white"}} id="cancel_meeting" value="submit">Cancel</button> 
                                            </div> 
                                        </div>

                                </div>
                            </Fade>
                        </div>
                    </div>
                    </Fade>
                </div>
            </>
        )
    }
}

export default ScheduledMeetings