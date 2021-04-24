import React from 'react'
import './proeditinfo.css'

class ProEditInfo extends React.Component {
    constructor() {
        super();
        this.state={
            name:"",
            email:"",
            company:"",
            role:"",
            linkedin:""
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
                <div id="pro_edit_info_page">
                <h2 id="pro_edit_page_title">Edit your information</h2>
                    <div id="pro_edit_info_form">
                        <form onSubmit={this.onSubmit}>
                            <label>Name: </label>
                            <br />
                            <input style={{height:"20px", width:"250px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="name" type="text" onChange={this.onChange} value={this.state.name} />

                            <br /><br />

                            <label>Email: </label>
                            <br />
                            <input style={{height:"20px", width:"250px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}}name="email" type="text" onChange={this.onChange} value={this.state.email} />

                            <br /><br />

                            <label>Company: </label>
                            <br />
                            <input style={{height:"20px", width:"250px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="company" type="text" onChange={this.onChange} value={this.state.company} />

                            <br /><br />

                            <label>Role: </label>
                            <br />
                            <input style={{height:"20px", width:"250px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="role" type="text" onChange={this.onChange} value={this.state.role} />

                            <br /><br />

                            <label>LinkedIn: </label>
                            <br />
                            <input style={{height:"20px", width:"250px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="linkedin" type="text" onChange={this.onChange} value={this.state.linkedin} />

                            <br /><br />
                            <button id="update_info_button" type="submit" value="save">update</button>

                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default ProEditInfo