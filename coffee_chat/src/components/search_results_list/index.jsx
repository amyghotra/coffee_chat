import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Avatar,
  Grid,
} from "@material-ui/core";
import SearchResultItem from "../search_result_item";

const useStyles = makeStyles({
  avatar: {
    height: "7em",
    width: "7em",
  },
});


const SearchResultList = ({ company, profession, searchResult }) => {
  const classes = useStyles();

  return (
    <>
      <h3>Search Results for:</h3>
      {
        company? <h4>Company: {company}</h4> : <h4>Company: Any</h4>
      }
      {
        profession? <h4>Profession: {profession}</h4> : <h4>Profession: Any</h4>
      }
      <Grid container >
        <Grid item xs={12}>
          {searchResult.map((resultItem) => {
            console.log(resultItem);
            return (<SearchResultItem />);
          })}
          {/* {searchResult.map((item) => {
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
          })} */}
        </Grid>
      </Grid>
    </>
  );
}

export default SearchResultList;
