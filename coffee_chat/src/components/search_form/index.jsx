import React from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input, 
} from "reactstrap";

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
      <h3>Search Form</h3>
      <Form>
        <FormGroup>
          <Label for="company">Company</Label>
          <Input
            type="text"
            name="company"
            placeholder="Company Name"
            onChange={handleCompChange}
            value={compQuery}
          />
        </FormGroup>
        <FormGroup>
          <Label for="profession">Profession</Label>
          <Input
            type="text"
            name="profession"
            placeholder="Profession Name"
            onChange={handleProfChange}
            value={profQuery}
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
