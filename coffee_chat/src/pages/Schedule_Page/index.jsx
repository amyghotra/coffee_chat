import React, { useMemo, useState } from "react";
import { Container } from "@material-ui/core";
// import { Spinner } from "reactstrap";

import Fade from 'react-reveal/Fade';
import NavBar from "../../components/navbar";
import SearchResultList from "../../components/search_results_list";
import SearchForm from "../../components/search_form";

import { GetProfessionals } from '../../services';

// const Loading = () => <Spinner color="info" />;

const DEMO_RES = [
  {
    first: "John",
    last: "Appleseed",
    imgsrc: "https://cdn.shopify.com/s/files/1/0070/7235/0326/products/Doggodog_Corgi_Coffee_B_Sticker_OP-01_2048x.jpg?v=1571963696",
    company: "Amazon",
    position: "Senior Software Engineer",
    availibility: {
      "1/1/2021": [100, 200],
    },
  },
  {
    first: "Jane",
    last: "Smith",
    imgsrc: "https://ih1.redbubble.net/image.834098180.7933/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
    company: "Google",
    position: "Senior Software Engineer",
    availibility: {
      "1/1/2021": [100, 200],
    },
  },
  {
    first: "Jane",
    last: "Appleseed",
    imgsrc: "https://cdn.shopify.com/s/files/1/0070/7235/0326/products/Doggodog_Corgi_Coffee_B_Sticker_OP-01_2048x.jpg?v=1571963696",
    company: "Amazon",
    position: "Senior Software Engineer",
    availibility: [
      {
        "1/1/2021": [100, 200],
      }
    ],
  },
  {
    first: "John",
    last: "Smith",
    imgsrc: "https://ih1.redbubble.net/image.834098180.7933/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
    company: "Google",
    position: "Senior Software Engineer",
    availibility: {
      "1/1/2021": [100, 200],
    },
  },
];

const SchedulePage = () => {
  
  const [compQuery, setCompQuery] = useState();
  const [profQuery, setProfQuery] = useState();
  const [company, setCompany] = useState();
  const [profession, setProfession] = useState();

  const [searchResult, setSearchResult] = useState([]);
  // const [loadingSearch, setLoadingSearch] = useState(false);
  const [isError, setIsError] = useState(undefined);

  const handleSearch = async () => {
    setIsError(undefined);

    console.log(compQuery, profQuery);
    const results = await GetProfessionals(compQuery, profQuery);
    // setSearchResults = ...
    // setSearchResult(DEMO_RES);
    console.log(results.data);
    setCompany(compQuery);
    setProfession(profQuery);

    setIsError(false);
    // setisError(false);
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
          />
          {content}
        </Container>
      </Fade>
    </div>
  );
}

export default SchedulePage;
