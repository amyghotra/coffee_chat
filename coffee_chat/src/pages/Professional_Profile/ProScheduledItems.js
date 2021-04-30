import React from 'react'
import Modal from 'react-modal';
import './proscheduled.css'

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
    }
};

export default class ProScheduledItems extends React.Component{
    constructor(props){
        super(props);
        this.state={
            studentName:"",
            studentSchool:"",
            meeting_date:"",
            meeting_time:""
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
        // code to delete meeting for both parties
        alert("meeting has been cancelled",2000)
    }

    render() {
        return (
            <>
                <div id="student_information">
                    <div style={{width:"max-content"}}>
                        <h4 
                            onClick={this.openModal}
                            className="student_info" 
                            id="student_name" 
                            style={{fontWeight:"600", fontSize:"20px"}}
                        >
                            Student One 
                        </h4>
                        <Modal 
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            contentLabel="Example Modal"
                            style={customStyles}
                        >
                            <div id="student_modal_container">
                                <h4 id="modal_student_name">Student Name</h4>
                                <p className="modal_student_info" id="modal_student_school_major">School name: Major</p>
                                <p className="modal_student_info" id="modal_student_linkedin"><a href="www.linkedin.com">LinkedIn</a></p>
                            </div>
                        </Modal>
                    </div>
                    <p className="student_info" id="student_school">School Name</p>
                    <p className="student_info" id="date">Monday June 16th, 2021</p>
                    <p className="student_info" id="time">9:45am</p>       
                    <div style={{marginLeft:"230px"}}>
                        <button onClick={this.handleCancel} id="cancel_meeting" value="submit">Cancel</button> 
                    </div>                         
                </div>
            </>
        )
    }
}