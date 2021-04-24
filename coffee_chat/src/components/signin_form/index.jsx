import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import coffee_img from '../../images/coffee.jpeg';

import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { COLOR_PALETTE } from '../../utils/theme';

import LoginForm from "../login";
import SignUpForm from "../signup";

const useStyle = makeStyles({
  formContainer: {
    width: "25em",
    // minHeight: "25em",
    height: "40em",
    border: "2px solid",
    padding: "2em",
    position: "relative",
    top: "20%",
    borderRadius: '1em',
    backgroundColor: `rgb(255,255,255, 0.8)`,
    // margin: "auto",
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
    verticalAlign: "center",
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
    position: "static",
    zIndex: 10,
    boxShadow: "rgb(0, 0, 0, 0.4)",
    textAlign: "center",
    margin: ".5em .5em 2em",
  },
})

const SignInForm = () => {
  const styleClasses = useStyle();

  const [method, toggleMethod] = useState(true); // method is referring to sign up or login

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

export default SignInForm;
