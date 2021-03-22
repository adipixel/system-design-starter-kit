import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";
import {
  loadWineTypesAction,
  wineTypesSelector,
} from "../features/wine-board/wine-board.slice";

export function WineTypes() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOnLearnMore = () => {
    alert("clicked");
  };

  const wineTypes = useSelector(wineTypesSelector);

  if (wineTypes.length === 0) {
    dispatch(loadWineTypesAction());
  }

  if (!wineTypes) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2}>
      {wineTypes &&
        wineTypes.map((item: any, index: number) => (
          <Grid item key={index}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Wine type {index + 1}
                </Typography>
                <Typography variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="body2" component="p">
                  Some description
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={"/play/" + item.name} className={classes.btn}>
                  <Button size="small" variant="contained" color="secondary">
                    Select
                  </Button>
                </Link>
                <Button size="small" onClick={handleOnLearnMore}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}

const useStyles = makeStyles(() => {
  return {
    btn: {
      textDecoration: "none",
    },
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
  };
});
