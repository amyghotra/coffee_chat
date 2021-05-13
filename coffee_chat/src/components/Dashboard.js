import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
// import ProfessionalProfile from '../pages/Professional_Profile/index'
import Loading from './loading/index';

export default function Dashboard() {
  const history = useHistory();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(async () => {
    async function getInfo() {
      let object = '';
      let obj_string = '';
      try {
        await fetch('http://localhost:5000/dashboard/', {
          method: 'GET',
          headers: { jwtToken: localStorage.token },
        })
          .then((res) => res.text())
          .then((text) => (obj_string = text));
        // .then(text => {object = text; obj_string = text})
        object = JSON.parse(obj_string);

        // const user_type = obj_string.split('"')[1]
        // const user_name = object.pro_name

        if (object.professionalInfo) {
          history.push({
            pathname: '/professionalprofile',
            state: {
              isAuth: true,
              obj: object,
            },
          });
        } else {
          history.push({
            pathname: '/studentprofile',
            state: {
              isAuth: true,
              obj: object,
            },
          });
        }
      } catch (err) {
        console.log(err.message);
      }
      // const user_type = obj_string.split('"')[1];
      // const user_name = object.pro_name

      // if (object.professionalInfo) {
      //   history.push({
      //     pathname: '/professionalprofile',
      //     state: {
      //       isAuth: true,
      //       obj: object,
      //     },
      //   });
      // } else {
      //   history.push({
      //     pathname: '/studentprofile',
      //     state: {
      //       isAuth: true,
      //       obj: object,
      //     },
      //   });
      // }
    }
    await getInfo();
  }, [history]);

  if (!isAuthenticated) {
    <Redirect to="/landing" />;
  } else if (isAuthenticated) {
    <Redirect to="/professionalprofile" />;
  }

  return (
    <>
      <Loading />
    </>
  );
}
