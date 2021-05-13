import React from "react";
import {
  Grid,
} from "@material-ui/core";
import SearchResultItem from "../search_result_item";
import './index.css'

const SearchResultList = ({ company, profession, searchResult }) => {

  return (
    <>
      <h3 id="results_section_title">Search results for</h3>
      {
        company? <h4 className="searched_items">Company: {company}</h4> : <h4  className="searched_items">Company: Any</h4>
      }
      {
        profession? <h4 className="searched_items">Profession: {profession}</h4> : <h4 className="searched_items">Profession: Any</h4>
      }
      <Grid container >
        <Grid item xs={12}>
          {searchResult.map((resultItem, index) => {
            return (
              <SearchResultItem 
                professionalInfo={resultItem}
                key={index}
              />
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default SearchResultList;
