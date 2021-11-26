import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { WineTypes } from "../../organisms/WineTypes";
import { Link } from "react-router-dom";

export function WineBoard() {
  return (
    <Grid container spacing={4}>
      <Typography variant="h5" gutterBottom>
        Choose your favorite wine
      </Typography>
      <WineTypes />
      <br />
      <Link to={"/live"}>
        <Button size="small" variant="contained" color="primary">
          Check live game
        </Button>
      </Link>
    </Grid>
  );
}
