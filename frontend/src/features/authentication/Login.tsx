import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { authenticate } from "../../api/auth/login.api";

export function Login() {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = () => {
    authenticate("admin", "admin")
      .then((res) => {
        console.log(res);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid className={classes.root}>
      <Typography variant="h6">Login</Typography>
      <br />
      <form noValidate autoComplete="off">
        <div>
          <TextField id="username" label="Username" defaultValue="admin" />
        </div>
        <br />
        <div>
          <TextField id="password" label="Password" type="password" />
        </div>
        <br />
        <Button
          onClick={() => handleLogin()}
          variant="contained"
          color="secondary"
        >
          Login
        </Button>
      </form>
    </Grid>
  );
}

const useStyles = makeStyles(() => {
  return {
    root: {
      textAlign: "center",
    },
  };
});
