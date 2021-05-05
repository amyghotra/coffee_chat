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
import axios from "axios";

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
    const fetchData = async () => {
      const topcompanies = await axios.get("http://localhost:5000/companies");
      return topcompanies.data;
    }
    fetchData().then((value) => {
        setCompanies(value.data);
      }
    );
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
              companies.map((companyObj, index) => {
                const { company, totalhours } = companyObj;
                return (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell component="th" scope="row">{company}</TableCell>
                    <TableCell>{totalhours}</TableCell>
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
