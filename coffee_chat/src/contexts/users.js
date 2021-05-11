import React, { createContext, useEffect, useState } from 'react';
import { GetVertification } from '../services';

const uType = {
  GUEST: 'guest',
  STUDENT: 'student',
  PRO: 'professional',
};

const unimplemented = () => {
  throw new Error('Context has not been initialized');
};

const UserContext = createContext({
  userType: null,
  authorized: false,
  selectedProfessional: null,
  handleSetProfessional: unimplemented,
  handleAuthenicate: unimplemented,
  handleLogout: unimplemented,
});

export const UserContextProvider = ({ children }) => {
  const [userType, setUserType] = useState(uType.GUEST);
  const [authorized, setAuthorized] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState();

  useEffect(() => {
    const handleRetrieveUserType = async (token) => {
      try {
        const userT = await GetVertification(token);
        // console.log(userT);
        if (userT.userType === 'student') {
          setUserType(uType.STUDENT);
          setAuthorized(true);
        } else if (userT.userType === 'professional') {
          setUserType(uType.PRO);
          setAuthorized(true);
        }
      } catch (error) {
        setUserType(uType.GUEST);
      }
    };

    handleRetrieveUserType(localStorage.token);
  }, []);

  const handleSetProfessional = (professionalId) => {
    setSelectedProfessional(professionalId);
  };

  const handleAuthenicate = () => {
    setAuthorized(true);
  };

  const handleLogout = () => {
    setAuthorized(false);
  };

  return (
    <UserContext.Provider
      value={{
        userType,
        authorized,
        selectedProfessional,
        handleSetProfessional,
        handleAuthenicate,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
