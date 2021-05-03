import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { useHistory } from 'react-router-dom'

const useStyle = makeStyles({
  submitButton: {
    textAlign: "center",
    width: "15em",
    margin: "2em auto 0",
    display: "flex",
    justifyContent: "center",
  },
  form: {
    
  }
})

const LoginForm = () => {
  const styleClasses = useStyle();

  const history = useHistory()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState();
  
  const handleEmailUpdate = (event) => {
    setEmail(event.target.value);
  }

  const handlePassUpdate = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = (event) => {
    // TODO: SEND TO SERVER SIDE
    // console.log('try login');
    history.push("/dash")
  }

  return (
    <div>
      {console.log('login', email, password)}

      <Form className={styleClasses.form}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type='text' name="email" id="email" 
          placeholder="Email" onChange={handleEmailUpdate} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type='password' name="password" id="password" 
          placeholder="Password" onChange={handlePassUpdate} />
        </FormGroup>
        <FormGroup>
          <Button className={styleClasses.submitButton} onClick={handleLogin}> Login </Button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default LoginForm;
