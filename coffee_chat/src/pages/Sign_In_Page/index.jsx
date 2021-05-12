import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import SignInForm from "../../components/signin_form";
import Navbar from "../../components/navbar";
import UserContext from '../../contexts/users';

const SignInPage = () => {
  const { userType, authorized } = useContext(UserContext);

  const redirectFor = (userType) => {
    if (userType === 'student') {
      // return <Redirect to="/topcompanies" />
      console.log("Should redirect to student bc student token was checked")
    } else {
      // return <Redirect to="/professionalprofile" />
      console.log("Should redirect to student bc professional token was checked")
    }
  }

  return (
    <>
      <h1>{userType}</h1>
      {authorized ? redirectFor(userType) : <></>}
      <div>
        <Navbar />
        
        <SignInForm />
      </div>
    </>
  )
}

export default SignInPage;
