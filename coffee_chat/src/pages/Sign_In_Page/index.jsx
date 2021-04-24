import React from 'react';
import SignInForm from "../../components/signin_form";
import Navbar from "../../components/navbar";

const SignInPage = () => {
  return (
    <>
      <div>
        <Navbar />
        
        <SignInForm />
      </div>
    </>
  )
}

export default SignInPage;
