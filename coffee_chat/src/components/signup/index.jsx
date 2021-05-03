import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useHistory, Redirect} from 'react-router-dom'


const useStyle = makeStyles({
  submitButton: {
    textAlign: "center",
    width: "15em",
    margin: "2em auto 0",
    display: "flex",
    justifyContent: "center",
  },
})

const SignUpForm = ({setAuth}) => {
  const styleClasses = useStyle();

  const history = useHistory()

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    password:"",
    company:"",
    jobTitle:""
  })

  const { name, email, password, company, jobTitle } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const [isStudent, setIsStudent] = useState(true);

  const handleStudent = (event) => {
    setIsStudent(true);
  }

  const handlePro = (event) => {
    setIsStudent(false);
  }

  const handleAuthSuccess = () => {
    history.push({
      pathname:'/dash',
      state:{ isAuth: true }
    })
  }

  const handleAuthFailure = () => {
    // 
  }

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const body = { name, email, password, isStudent, company, jobTitle }
      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }
      )
        .then(res => res.text())
        // .then(res => console.log(res.json()))
        // .then(text => console.log(text))

      const parse = await response
      console.log(parse.split('"')[3]) // token value

      const token_value = parse.split('"')[3]

      if (parse.split('"')[1] === 'token') {
        localStorage.setItem("token", token_value);
        setIsAuthenticated(true);
        handleAuthSuccess()
        // toast.success("Register Successfully");
      } else {
        setIsAuthenticated(false)
        // toast.error(parse);
      }
    } catch (err) {
      console.log(err.message)
    }
    // history.push("./landing")
  }

  return (
    <div>
      {/* {console.log('sign up',email, name, password, isStudent, company, jobTitle)} */}

      <Form>
        {/* Username */}
        <FormGroup>
          <Label for="name">Full Name</Label>
          <Input type='text' name="name" id="name" 
          placeholder="Name" onChange={onChange} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type='text' name="email" id="email" 
          placeholder="Email" onChange={onChange} />
        </FormGroup>
        {/* Password */}
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type='password' name="password" id="password" 
          placeholder="Password" onChange={onChange} />
        </FormGroup>
        {/* Position */}
        <FormGroup>
          <Label for="position">Are you a student or a professional?</Label>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="position" onChange={handleStudent} />
              Student
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="position" onChange={handlePro}/>
              Professional
            </Label>
          </FormGroup>
        </FormGroup>
        {/* Pros additional info */}
        {isStudent? null: (
          <>
            {/* Company */}
            <FormGroup>
              <Label for="company">Company</Label>
              <Input type='text' name="company" id="company" 
              placeholder="ex: Google" onChange={onChange} />
            </FormGroup>
            {/* Position */}
            <FormGroup>
              <Label for="jobTitle">Job Title</Label>
              <Input type='jobTitle' name="jobTitle" id="jobTitle" 
              placeholder="ex: Senior Software Engineer" onChange={onChange} />
            </FormGroup>
          </>
        )}
        {/* Submit */}
        <FormGroup>
          <Button className={styleClasses.submitButton} onClick={handleLogin} >Create Account</Button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default SignUpForm;
