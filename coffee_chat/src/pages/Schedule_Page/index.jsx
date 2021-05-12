import React, { useMemo, useState } from "react";
import { Container } from "@material-ui/core";

import Fade from 'react-reveal/Fade';
import NavBar from "../../components/navbar";
import SearchResultList from "../../components/search_results_list";
import SearchForm from "../../components/search_form";

import { GetProfessionals } from '../../services';

const SchedulePage = () => {
  const [compQuery, setCompQuery] = useState();
  const [profQuery, setProfQuery] = useState();
  const [company, setCompany] = useState();
  const [profession, setProfession] = useState();

  const [searchResult, setSearchResult] = useState([]);
  const [isError, setIsError] = useState(undefined);

  const handleSearch = async () => {
    setIsError(undefined);
    // console.log(compQuery, profQuery);
    const results = await GetProfessionals(compQuery, profQuery);
    // console.log(results.data);
    setSearchResult(results.data);
    setCompany(compQuery);
    setProfession(profQuery);

    setIsError(false);
  };

  const handleCompChange = (value) => {
    setCompQuery(value);
  };

  const handleProfChange = (value) => {
    setProfQuery(value);
  }

  const content = useMemo(() => {
    if (isError === undefined || isError) {
      return (
        <div>
          No Results
        </div>
      );
    }
    return (
      <SearchResultList
        company={company}
        profession={profession}
        searchResult={searchResult}
      />
    );
  }, [searchResult, isError, company, profession]);

  return (
    <div>

      <NavBar />
      <Fade>
        <Container>
          <h1>Schedule Page</h1>
          <SearchForm 
            onSearch={handleSearch}
            onCompChange={handleCompChange}
            onProfChange={handleProfChange}
            compQuery={compQuery}
            profQuery={profQuery}
          />
          {content}
        </Container>
      </Fade>
    </div>
  );
}

export default SchedulePage;
