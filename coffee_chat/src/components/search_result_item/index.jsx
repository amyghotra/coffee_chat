import React from "react";

import {
  Grid,
  Avatar,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  avatar: {
    height: "7em",
    width: "7em",
  },
});

const SearchResultItem = ({ professionalInfo }) => {
  const classes = useStyles();

  const { first, last, imgsrc, company, position, availbility } = professionalInfo;

  return (
    <>
      <Grid container spacing={3} key={`${first}${last}`}>
        <Grid item xs={3}>
          <Avatar 
            alt={`${first}'s profile picture`}
              src={imgsrc}
            className={classes.avatar}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">
            {`${first} ${last}`}
          </Typography>
          <Typography variant="subtitle2">
            {`${company} ${position}`}
          </Typography>
        </Grid>
        <Grid item xs={5}>
        </Grid>
      </Grid>
    </>
  )
}

export default SearchResultItem;
