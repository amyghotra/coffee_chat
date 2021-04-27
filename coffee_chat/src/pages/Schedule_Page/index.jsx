import React, { useMemo, useState } from "react";
import { Avatar, Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Spinner } from "reactstrap";

import NavBar from "../../components/navbar";
import SearchResults from "../../components/search_results";
import SearchForm from "../../components/search_form";

const useStyles = makeStyles({
  avatar: {
    height: "7em",
    width: "7em",
  },
  base: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
});

const Loading = () => <Spinner color="info" />;

const DEMO_RES = [
  {
    first: "John",
    last: "Appleseed",
    imgsrc: "https://cdn.shopify.com/s/files/1/0070/7235/0326/products/Doggodog_Corgi_Coffee_B_Sticker_OP-01_2048x.jpg?v=1571963696",
    company: "Amazon",
    position: "Senior Software Engineer",
    date: 1/1/2021,
    startTime: "4:30",
    duration: 15,
  },
  {
    first: "Jane",
    last: "Smith",
    imgsrc: "https://ih1.redbubble.net/image.834098180.7933/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
    company: "Google",
    position: "Senior Software Engineer",
    date: 1/1/2021,
    startTime: "5:30",
    duration: 15,
  },
];

const SchedulePage = () => {
  const classes = useStyles();
  
  const [compQuery, setCompQuery] = useState();
  const [profQuery, setProfQuery] = useState();
  const [searchResult, setSearchResult] = useState([]);
  // const [loadingSearch, setLoadingSearch] = useState(false);
  const [isError, setIsError] = useState(undefined);

  const handleSearch = () => {
    setIsError(undefined);
    console.log(compQuery, profQuery);
    // setSearchResults = ...
    setSearchResult(DEMO_RES);
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
    console.log(isError)
    if (isError === undefined || isError) {
      return (
        <div>
          No Results
        </div>
      );
    }

    return (
      <>
        <h3>Search Results for:</h3>
        {
          compQuery? <h4>Company: {compQuery}</h4> : <h4>Company: Any</h4>
        }
        {
          profQuery? <h4>Profession: {profQuery}</h4> : <h4>Profession: Any</h4>
        }
        <h4></h4>
        <Grid container >
          <Grid item xs={12}>
            {searchResult.map((item) => {
              const { first, last, imgsrc, company, position } = item;
              return (
                <Grid container spacing={3} key={`${first}${last}`}>
                  <Grid item xs={3}>
                    <Avatar 
                      alt={`${first}'s profile picture`}
                      src={imgsrc}
                      className={classes.avatar}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    {`${first} ${last}`}
                  </Grid>
                  <Grid item xs={6}>
                    {`${company} ${position}`}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </>
    );
  }, [searchResult]);

  return (
    <div>

      <NavBar />
      <Container>
        <h1>Schedule Page</h1>
        <SearchForm 
          onSearch={handleSearch}
          onCompChange={handleCompChange}
          onProfChange={handleProfChange}
        />
        {content}
      </Container>
    </div>
  );
}

export default SchedulePage;
