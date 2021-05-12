import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Fade from 'react-reveal/Fade';
import {
  Grid,
  Avatar,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";

import UserContext from '../../contexts/users';

import imgsrc from "../../images/newyork.jpeg";

const useStyles = makeStyles({
  avatar: {
    height: "7em",
    width: "7em",
  },
});

const SearchResultItem = ({ professionalInfo }) => {
  const { handleSetProfessional } = useContext(UserContext);

  const classes = useStyles();

  console.log(professionalInfo)
  const {
    pro_id,
    name,
    // social,
    // experience,
    position,
    company,
  } = professionalInfo
  

  const key = name.replace(/\s+/g, '-').toLowerCase();
  return (
    <Fade>
      <Grid container spacing={3} key={`${key}`}>
        <Grid item xs={3}>
          <Avatar 
            alt={`${name}'s profile picture`}
              src={imgsrc}
            className={classes.avatar}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">
            {`${name}`}
          </Typography>
          <Typography variant="subtitle1">
            {`${position} at ${company}`}
          </Typography>
          <Button color="primary" onClick={handleSetProfessional(pro_id)}>
            <Link to="/professional_public"> View Time Slots</Link>
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">
            Summary
          </Typography>
        </Grid>
      </Grid>
    </Fade>
  );
}

export default SearchResultItem;
