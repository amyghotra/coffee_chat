import React from 'react';
import { Link } from "react-router-dom";

const Error404Page = () => (
  <div>
    <h1>Error 404</h1>
    <Link to="/landing">Return Home</Link>
  </div>
);

export default Error404Page;
