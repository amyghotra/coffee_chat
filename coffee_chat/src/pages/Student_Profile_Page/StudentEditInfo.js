import React from 'react'
import NavBar from '../../components/navbar/index'
import './studenteditinfo.css' 

class StudentEditInfo extends React.Component {
    constructor() {
        super();
        this.state={
            name:"",
            email:"",
            school:"",
            major:""
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }

    onSubmit(event){
        alert('Successfully changed information', 2000);
    }

    render(){
        return(
            <>
            <NavBar />
                <div id="student_edit_info_page">
                <h2 id="student_edit_page_title">Edit your information</h2>
                    <div id="student_edit_info_form">
                        <form onSubmit={this.onSubmit}>
                            <div style={{textAlign:"left"}}>
                                <label>Name: </label>
                                    <br />
                                    <input style={{height:"25px", width:"350px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="name" type="text" onChange={this.onChange} value={this.state.name} />

                            </div>
                           
                            <br /><br />

                            <div style={{textAlign:"left"}}>
                                <label>Email: </label>
                                <br />
                                <input style={{height:"25px", width:"350px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}}name="email" type="text" onChange={this.onChange} value={this.state.email} />
                            </div>
                            <br /><br />

                            <div style={{textAlign:"left"}}>
                                <label>School: </label>
                                <br />
                                <input style={{height:"25px", width:"350px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="company" type="text" onChange={this.onChange} value={this.state.company} />
                            </div>

                            <br /><br />

                            <div style={{textAlign:"left"}}>
                                <label>Major: </label>
                                <br />
                                <input style={{height:"25px", width:"350px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="role" type="text" onChange={this.onChange} value={this.state.role} />
                            </div>

                            <br /><br />
                            
                            <div style={{textAlign:"left"}}>
                                <label>LinkedIn: </label>
                                <br />
                                <input style={{height:"25px", width:"350px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="linkedin" type="text" onChange={this.onChange} value={this.state.linkedin} />
                            </div>

                            <br /><br />

                            <div style={{textAlign:"right"}}>
                                <button id="student_update_info_button" type="submit" value="save">update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default StudentEditInfo