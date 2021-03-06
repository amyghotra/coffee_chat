import axios from 'axios';

export const GetStudentUserInfo = async (token) => {
  const info = await axios.get('http://localhost:5000/auth/info/student', {
    headers: { jwtToken: token },
  });

  return info.data.results;
};

export const GetProfessionalUserInfo = async (token) => {
  const info = await axios.get('http://localhost:5000/auth/info/pro', {
    headers: { jwtToken: token },
  });

  return info.data.results;
};
