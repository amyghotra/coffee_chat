import React, { useState } from 'react'
import './proeditinfo.css'
import NavBar from '../../components/navbar/index'
import { useHistory, location } from 'react-router-dom'

function ProEditInfo(props) {
    const history = useHistory()

    const [info, setInfo] = useState({
        name:props.location.state.name,
        email:props.location.state.email,
        social:props.location.state.social,
        company:props.location.state.company,
        role:props.location.state.role,
        yearsExperience:props.location.state.yearsExperience
    })

    const { name, email, social, company, role, yearsExperience } = info

    const onChange = e =>
        setInfo({ ...info, [e.target.name]: e.target.value }
    )

    async function onSubmit(event) {
        event.preventDefault()

        try {
            let object = ""
            let object_string = ""
            const response = await fetch("http://localhost:5000/updateProInfo/get", {
                method:"GET",
                headers:{ jwtToken: localStorage.token}
            })
                .then(res => res.text())
                .then(text => object_string = text)
            object = JSON.parse(object_string)
            // console.log(object)
            
            const proId = object.proId

            // update professional information
            const body = { name, email, social, company, role, yearsExperience, proId }
            const postRes = await fetch(
                "http://localhost:5000/updateProInfo/post",
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(body)
                }
            )
                .then(res => res.text())

                .then(text => console.log(text))
        
            const parseRes = await postRes;
            
        } catch (err) {
            console.log(err)
        }
        history.push('/dash')
        // alert("submitted")
    }

    return(
        <>
        <NavBar />
            <div style={{backgroundColor:"white"}} id="pro_edit_info_page">
            <h2 id="pro_edit_page_title">Edit your information</h2>
                <div id="pro_edit_info_form">
                <form onSubmit={onSubmit}>
                        <div style={{textAlign:"left"}}>
                            <label>Name: </label>
                                <br />
                                <input style={{height:"25px", width:"350px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="name" type="text" onChange={onChange} value={name} />

                        </div>
                        
                        <br /><br />

                        <div style={{textAlign:"left"}}>
                            <label>Email: </label>
                            <br />
                            <input style={{height:"25px", width:"350px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}}name="email" type="text" onChange={onChange} value={email} />
                        </div>
                        <br /><br />

                        <div style={{textAlign:"left"}}>
                            <label>Company: </label>
                            <br />
                            <input style={{height:"25px", width:"350px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="company" type="text" onChange={onChange} value={company} />
                        </div>

                        <br /><br />

                        <div style={{textAlign:"left"}}>
                            <label>Role: </label>
                            <br />
                            <input style={{height:"25px", width:"350px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="role" type="text" onChange={onChange} value={role} />
                        </div>

                        <br /><br />
                        
                        <div style={{textAlign:"left"}}>
                            <label>LinkedIn: </label>
                            <br />
                            <input style={{height:"25px", width:"350px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="social" type="text" onChange={onChange} value={social} />
                        </div>

                        <br /><br />

                        <div style={{textAlign:"right"}}>
                            <button onClick={onSubmit} id="update_info_button" type="submit" value="save">update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProEditInfo