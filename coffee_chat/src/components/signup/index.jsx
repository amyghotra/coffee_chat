import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const useStyle = makeStyles({
  submitButton: {
    textAlign: "center",
    width: "15em",
    margin: "2em auto 0",
    display: "flex",
    justifyContent: "center",
  },
})

const SignUpForm = () => {
  const styleClasses = useStyle();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState();
  const [isStudent, setIsStudent] = useState(true);
  const [company, setCompany]   = useState("");
  const [jobTitle, setJobTitle] = useState("");
  
  const handleUserUpdate = (event) => {
    setUsername(event.target.value);
  }

  const handlePassUpdate = (event) => {
    setPassword(event.target.value);
  }

  const handleStudent = (event) => {
    setIsStudent(true);
  }

  const handlePro = (event) => {
    setIsStudent(false);
  }

  const handleCompanyUpdate = (event) => {
    setCompany(event.target.value);
  }

  const handleTitleUpdate = (event) => {
    setJobTitle(event.target.value);
  }

  const handleLogin = (event) => {
    console.log('try sign up');
  }

  return (
    <div>
      {console.log('sign up',username, password, isStudent, company, jobTitle)}

      <Form>
        {/* Username */}
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type='text' name="username" id="username" 
          placeholder="Username" onChange={handleUserUpdate} />
        </FormGroup>
        {/* Password */}
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type='password' name="password" id="password" 
          placeholder="Password" onChange={handlePassUpdate} />
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
              placeholder="ex: Google" onChange={handleCompanyUpdate} />
            </FormGroup>
            {/* Position */}
            <FormGroup>
              <Label for="jobTitle">Job Title</Label>
              <Input type='jobTitle' name="jobTitle" id="jobTitle" 
              placeholder="ex: Senior Software Engineer" onChange={handleTitleUpdate} />
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
