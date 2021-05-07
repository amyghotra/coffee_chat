import axios from "axios";

export const RetrieveCompanies = async () => {
  const companyData = await axios.get("http://localhost:5000/companies");

  return companyData.data;
};

export const GetProfessionals = async (company, profession) => {
  console.log(company, profession);
  // const searchQuery = await axios.get("http://localhost:5000/search", {
  //   body: {
  //     company: company ? company : null,
  //     profession: profession ? profession : null,
  //   },
  // });

  const searchQuery = await fetch("http://localhost:5000/search", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      company: company ? company : null,
      profession: profession ? profession : null,
    }),
  });
  // console.log(searchQuery);

  return searchQuery.data;
};
