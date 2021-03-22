import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { WineTypes } from "../../organisms/WineTypes";

export function WineBoard() {
  return (
    <Grid container spacing={4}>
      <Typography variant="h5" gutterBottom>
        Choose your favorite wine
      </Typography>
      <WineTypes />
    </Grid>
  );
}
