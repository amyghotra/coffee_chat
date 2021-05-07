import React from "react";
import { Link } from "react-router-dom";

import Fade from 'react-reveal/Fade';
import {
  Grid,
  Avatar,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  avatar: {
    height: "7em",
    width: "7em",
  },
});

const SearchResultItem = ({ professionalInfo }) => {
  const classes = useStyles();

  const { name, imgsrc, company, position } = professionalInfo;
  
  const key = name.replace(/\s+/g, '-').toLowerCase();
  return (
    <Fade>
      {/* <Grid container spacing={3} key={`${first}${last}`}> */}
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
            {/* {`${first} ${last}`} */}
            {`${name}`}
          </Typography>
          <Typography variant="subtitle1">
            {`${position} at ${company}`}
          </Typography>
          {/* onclick should bring to a new page */}
          <Button color="primary">
            <Link to="/professional_public"> View Available Time Slots</Link>
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">
            Summary
          </Typography>
        </Grid>
      </Grid>
    </Fade>
    // <Grid container spacing={3} key={`${first}${last}`}>
    //   <Grid item xs={3}>
    //     <Avatar 
    //       alt={`${first}'s profile picture`}
    //         src={imgsrc}
    //       className={classes.avatar}
    //     />
    //   </Grid>
    //   <Grid item xs={4}>
    //     <Typography variant="h5">
    //       {`${first} ${last}`}
    //     </Typography>
    //     <Typography variant="subtitle2">
    //       {`${company} ${position}`}
    //     </Typography>
    //     {/* onclick should bring to a new page */}
    //     <Button color="primary">
    //       <Link to="/professional_public"> View Available Time Slots</Link>
    //     </Button>
    //   </Grid>
    //   <Grid item xs={5}>
    //     <Typography variant="h5">
    //       Summary
    //     </Typography>
    //   </Grid>
    // </Grid>
  );
}

export default SearchResultItem;
