import axios from "axios";

export const RetrieveCompanies = async () => {
  const companyData = await axios.get("http://localhost:5000/companies");

  return companyData.data;
};
