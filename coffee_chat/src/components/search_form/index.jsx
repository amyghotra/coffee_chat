import React from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input, 
} from "reactstrap";

import './index.css'

const SearchForm = ({ onSearch, onProfChange, onCompChange, compQuery, profQuery }) => {

  const handleCompChange = (e) => {
    onCompChange(e.target.value);
  }

  const handleProfChange = (e) => {
    onProfChange(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    // onSearch(profession, company);
    onProfChange('');
    onCompChange('');
    onSearch();
  }

  return (
    <>
      {/* <h3 style={{fontFamily:"'Raleway"}}>Search</h3> */}
      <Form>
        <FormGroup>
          <Label className="input_label" for="company">Company</Label>
          <Input
            type="text"
            name="company"
            placeholder="Company Name"
            onChange={handleCompChange}
            value={compQuery}
            className="input_field"
          />
        </FormGroup>
        <FormGroup>
          <Label className="input_label" for="profession">Profession</Label>
          <Input
            type="text"
            name="profession"
            placeholder="Profession Name"
            onChange={handleProfChange}
            value={profQuery}
            className="input_field"
          />
        </FormGroup>
        <FormGroup>
          <Button id="submit_search_button" onClick={handleSearch}>Search</Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default SearchForm;
