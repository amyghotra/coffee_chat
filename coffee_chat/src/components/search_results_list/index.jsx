import React from "react";
import {
  Grid,
} from "@material-ui/core";
import SearchResultItem from "../search_result_item";

const SearchResultList = ({ company, profession, searchResult }) => {

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
            return (<SearchResultItem professionalInfo={resultItem} />);
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default SearchResultList;
