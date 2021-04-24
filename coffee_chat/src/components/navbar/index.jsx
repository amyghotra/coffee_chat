import React from 'react';
// import { Link } from 'react-router-dom';

import {
  makeStyles,
  Appbar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuIcon,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  title: {
    marginLeft: 0,
    paddingLeft: 0,
    flexGrow: 1,
  },
  navlink: {
    textDecoration: "none",
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <h1>navbar</h1>
  );
}

export default Navbar;
