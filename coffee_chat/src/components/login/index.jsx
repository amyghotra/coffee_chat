import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

const useStyle = makeStyles({
  submitButton: {
    textAlign: "center",
    width: "15em",
    margin: "2em auto 0",
    display: "flex",
    justifyContent: "center",
  },
})

const LoginForm = () => {
  const styleClasses = useStyle();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState();
  
  const handleUserUpdate = (event) => {
    setUsername(event.target.value);
  }

  const handlePassUpdate = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = (event) => {
    // TODO: SEND TO SERVER SIDE
    console.log('try login');
  }

  return (
    <div>
      {console.log('login', username, password)}

      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type='text' name="username" id="username" 
          placeholder="Username" onChange={handleUserUpdate} />
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
