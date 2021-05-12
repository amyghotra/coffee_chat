import axios from 'axios';

export const GetVertification = async (token) => {
  const userType = await axios.get('http://localhost:5000/auth/verify', {
    headers: {
      jwtToken: token,
    },
  });

  return userType.data;
};

export const RetrieveCompanies = async () => {
  const companyData = await axios.get('http://localhost:5000/companies');

  return companyData.data;
};

export const GetProfessionals = async (company, profession) => {
  // console.log(company, profession);
  const companyQuery = company ? company : '';
  const professQuery = profession ? profession : '';
  const url = `http://localhost:5000/search?company=${companyQuery}&profession=${professQuery}`;
  console.log(url);
  const searchQuery = await axios.get(url);

  return searchQuery.data;
};
