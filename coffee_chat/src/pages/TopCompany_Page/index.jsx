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
  Typography,
} from "@material-ui/core";

import { COLOR_PALETTE } from "../../utils/theme";
import Navbar from "../../components/navbar";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  center: {
    textAlign: "center",
  },
  title: {
    margin: "1em auto .25em",
  },
  tableHeader: {
    backgroundColor: COLOR_PALETTE.Primary,
  },
});

const DEMO_COMPANIES = [
  {
    name: "Company1",
    hours: 55,
  },
  {
    name: "Company2",
    hours: 50,
  },
  {
    name: "Company3",
    hours: 45,
  },
  {
    name: "Company4",
    hours: 40,
  },
  {
    name: "Company5",
    hours: 35,
  },
  {
    name: "Company6",
    hours: 30,
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
    <>
      <Typography variant="h3" className={classes.title} >
        Rankings of Helpful Companies
      </Typography>
      <TableContainer component={Paper} >
        <Table className={classes.table} >
          <TableHead>
            <TableRow classname={classes.tableHeader}>
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
                    <TableCell component="th" scope="row">{name}</TableCell>
                    <TableCell>{hours}</TableCell>
                  </TableRow>
                ) 
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const TopCompanyPage = () => {
  return (
    <div>
      <Navbar />
      <Container fixed >
        <CompanyList />
      </Container>
    </div>
  )
}

export default TopCompanyPage;
