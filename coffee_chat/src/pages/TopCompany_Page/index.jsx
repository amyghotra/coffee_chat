import React, { useEffect, useState } from "react";
import { 
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  }
});

const DEMO_COMPANIES = [
  {
    name: "Company1",
    hours: 15,
  },
  {
    name: "Company2",
    hours: 10,
  }
];

const TopCompanyPage = () => {
  const classes = useStyles();

  const [ companies, setCompanies] = useState([]);

  // useEffect()
  return (<h1>Top Company Page</h1>);

  

}

export default TopCompanyPage;
