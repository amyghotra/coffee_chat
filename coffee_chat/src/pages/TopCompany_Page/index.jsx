import React, { useEffect, useState } from "react";
import { 
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@material-ui/core";

import Navbar from "../../components/navbar";

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

const NoResult = () => (
  <TableRow>
    <TableCell>No Result</TableCell>
    <TableCell />
    <TableCell />
  </TableRow>
);

const CompanyList = () => {
  const classes = useStyles();

  const [ companies, setCompanies] = useState([]);

  // const fetchTopCompanies = 

  useEffect(() => {
    setCompanies(DEMO_COMPANIES);
  }, []);

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.length === 0? 
            (<NoResult />) : 
            companies.map((company, index) => {
              const { name, hours } = company;
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{hours}</TableCell>
                </TableRow>
              ) 
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const TopCompanyPage = () => {
  return (
    <div>
      
      <Container fixed >
        
        <CompanyList />
      </Container>
    </div>
  )
}

export default TopCompanyPage;
