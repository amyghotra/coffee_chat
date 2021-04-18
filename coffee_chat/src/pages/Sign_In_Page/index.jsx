import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

// import { COLOR_PALETTE } from '../../utils/theme.js';
import coffee_img from '../../images/coffee.jpeg';

import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { COLOR_PALETTE } from '../../utils/theme';

const useStyle = makeStyles({
  formContainer: {
    width: "25em",
    border: "2px solid",
    padding: "2em",
    position: "absolute",
    top: "25%",
    borderRadius: '1em',
    backgroundColor: `rgb(255,255,255, 0.8)`,
  },
  maxW: {
    width: "100%",
    border: "2px solid",
  },
  pageContainer: {
    height: "100vh",
    width: "99vw",
    backgroundImage: `url(${coffee_img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
  },
  buttonPrimary: {
    padding: "3px",
    borderBottom: "2px solid",
    borderColor: COLOR_PALETTE.Tertiary,
    margin: "auto 2px",
  },
  buttonSecondary: {
    padding: "3px",
    margin: "auto 2px",
    cursor: "pointer",
  },
  formSelector: {
    position: "relative",
    zIndex: 10,
    boxShadow: "rgb(0, 0, 0, 0.4)",
    textAlign: "center",
    margin: ".5em .5em 2em",
  }
})

const LoginForm = () => {

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
          <Button onClick={handleLogin}> Login </Button>
        </FormGroup>
      </Form>
    </div>
  )
}

const SignUpForm = () => {
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
    console.log('try sign up');
  }

  return (
    <div>
      {console.log('sign up',username, password)}

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
        <Button onClick={handleLogin}> Login </Button>
      </Form>
    </div>
  )
}

const SignInPage = () => {
  const styleClasses = useStyle();

  // method here is a boolean, 1 for login; 0 for signup
  const [method, toggleMethod] = useState(true);

  const handleSwitch = () => {
    toggleMethod((method) => !method);
  }

  const renderLoginForm = () => (
    <>
      <div className={styleClasses.formContainer}>
        <Row className={styleClasses.formSelector}>
          <Col className={styleClasses.buttonPrimary}>
            <h5>Login</h5>
          </Col>
          <Col className={styleClasses.buttonSecondary} onClick={handleSwitch}>
            <h5>Register</h5>
          </Col>
        </Row>
        
        <h4>Login</h4>
        <LoginForm />
      </div>
    </>
  );

  const renderSignUpForm = () => (
    <>
      <div className={styleClasses.formContainer}>
        <Row className={styleClasses.formSelector}>
          <Col className={styleClasses.buttonSecondary} onClick={handleSwitch}>
            <h5>Login</h5>
          </Col>
          <Col className={styleClasses.buttonPrimary}>
            <h5>Register</h5>
          </Col>
        </Row>
        
        <h4>Register</h4>
        <SignUpForm />
      </div>
    </>
  );

  return (
    <Fade>
      <div className={styleClasses.pageContainer}>
        {
          method? renderLoginForm(): renderSignUpForm()
        }
      </div>
    </Fade>
    
  );
};

export default SignInPage;
