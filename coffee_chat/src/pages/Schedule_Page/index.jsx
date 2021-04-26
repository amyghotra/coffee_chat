import React, { useState } from "react";
import { Container } from "@material-ui/core";

import NavBar from "../../components/navbar";
import SearchResults from "../../components/search_results";
import SearchForm from "../../components/search_form";

const SchedulePage = () => {
  const [profession, setProfession] = useState("");
  const [company, setCompany] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleProfChange = (professionText) => {
    setProfession(professionText);
  }

  const handleCompChange = (companyText) => {
    setCompany(companyText);
  }

  return (
    <div>
      <NavBar />
      <Container>
        <h1>Schedule Page</h1>
        <SearchForm />


      </Container>
    </div>
  );
}

export default SchedulePage;
