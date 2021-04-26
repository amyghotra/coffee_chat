import React from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input, 
} from "reactstrap";

const SearchForm = ({ onProfChange, onCompChange }) => {
  
  const handleProfChange = (e) => {
    onProfChange(e.target.value);
  }

  const handleCompChange = (e) => {
    onCompChange(e.target.value);
  }

  return (
    <>
      <h1>Search Form</h1>
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
          <Button>Search</Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default SearchForm;
