import React, { useState, useEffect } from 'react'
import NavBar from '../../components/navbar/index'
import './studenteditinfo.css' 
import { useHistory, location } from 'react-router-dom'

function StudentEditInfo(props) {
    const history = useHistory()

    const [info, setInfo] = useState({
        name:props.location.state.name,
        email:props.location.state.email,
        social:props.location.state.social,
        school:props.location.state.school,
        major:props.location.state.major
    })

    const { name, email, social, school, major } = info

    const onChange = e =>
        setInfo({ ...info, [e.target.name]: e.target.value })

    // useEffect(() => {
    //     console.log(props.location.state)
    // }, [])

    async function onSubmit(event){
        event.preventDefault();

        try {
            // get user id
            let object = ""
            let obj_string = ""
            const response = await fetch("http://localhost:5000/updateStudentInfo/get", {
                method:"GET",
                headers:{ jwtToken: localStorage.token}
            })
                .then(res => res.text())
                .then(text => obj_string = text)
            object = JSON.parse(obj_string)
            // console.log(object)
            
            const studentId = object.studentId

            // update student information
            const body = { name, email, social, school, major, studentId }
            const postRes = await fetch(
                "http://localhost:5000/updateStudentInfo/post",
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(body)
                }
            )
                .then(res => res.text())
                // .then(text => console.log(text))
        
            const parseRes = await postRes;
            console.log(parseRes.split('"')[3])


        } catch (err) {
            console.log(err.message)
        }

        history.push('/dash')
    }

    function onClick(){
        history.goBack()
    }

    return(
        <>
        <NavBar />
            <div id="student_edit_info_page">
            <h2 id="student_edit_page_title">Edit your information</h2>
            <button onClick={onClick}>go back</button>
                <div id="student_edit_info_form">
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
                            <label>School: </label>
                            <br />
                            <input style={{height:"25px", width:"350px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="school" type="text" onChange={onChange} value={school} />
                        </div>

                        <br /><br />

                        <div style={{textAlign:"left"}}>
                            <label>Major: </label>
                            <br />
                            <input style={{height:"25px", width:"350px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="major" type="text" onChange={onChange} value={major} />
                        </div>

                        <br /><br />

                        <div style={{textAlign:"left"}}>
                            <label>Linkedin: </label>
                            <br />
                            <input style={{height:"25px", width:"350px", borderRadius:"5px",border:"1px solid black",'fontFamily': "'Raleway', sans-serif"}} name="social" type="text" onChange={onChange} value={social} />
                        </div>

                        <br /><br />

                        <div style={{textAlign:"right"}}>
                            <button onClick={onSubmit} id="student_update_info_button" type="submit" value="save">update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default StudentEditInfo