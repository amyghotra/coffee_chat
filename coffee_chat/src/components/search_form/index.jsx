import React, { useState } from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input, 
} from "reactstrap";

const SearchForm = ({ onSearch, onProfChange, onCompChange }) => {
  // const [profession, setProfession] = useState();
  // const [company, setCompany] = useState();

  const handleCompChange = (e) => {
    onCompChange(e.target.value);
  }

  const handleProfChange = (e) => {
    onProfChange(e.target.value);
  }

  const handleSearch = () => {
    // onSearch(profession, company);
    onSearch();
  }

  return (
    <>
      <h3>Search Form</h3>
      <Form>
        <FormGroup>
          <Label for="company">Company</Label>
          <Input
            type="text"
            name="company"
            placeholder="Company Name"
            onChange={handleCompChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="profession">Profession</Label>
          <Input
            type="text"
            name="profession"
            placeholder="Profession Name"
            onChange={handleProfChange}
          />
        </FormGroup>
        <FormGroup>
          <Button onClick={handleSearch}>Search</Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default SearchForm;
