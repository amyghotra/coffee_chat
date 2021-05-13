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
  const [isAuth, setIsAuth] = useState(false)

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

  const handleSuccess = (id) => {
    history.push('/dash')
  }

  const handleFailure = () => {
    history.push('/sign-in')
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      )
        .then(res => res.text())
        // .then(text => console.log(text))

      const parseRes = await response;
      let info = JSON.parse(parseRes)

      const token_value = info.token
      console.log(info)

      if (parseRes.length) {
        localStorage.setItem("token", token_value);
        setIsAuth(true);
        handleSuccess(info.id)
        // toast.success("Logged in Successfully");
      } else {
        setIsAuth(false);
        handleFailure()
        // toast.error(parseRes);
      }
    } catch (err) {
      console.log(err.message)
      console.log(isAuth);
    }
  }

  return (
    <div>

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
