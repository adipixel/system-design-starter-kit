import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";
import lightBlue from "@material-ui/core/colors/lightBlue";

export const lightTheme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: blue,
    type: "light",
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: lightBlue,
    type: "dark",
  },
});
