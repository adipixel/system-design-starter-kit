import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles, Theme, ThemeProvider } from "@material-ui/core/styles";

import { darkTheme, lightTheme } from "./themes";

import { themeNameSelector } from "./app.slice";
import { WineBoard } from "../features/wine-board/WineBoard";
import { Header } from "./internal/Header";
import { Login } from "../features/authentication/Login";
import { Trivia } from "../features/trivia/Trivia";

export function App() {
  const classes = useStyles();
  const themeName = useSelector(themeNameSelector);
  const theme = themeName === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <BrowserRouter>
          <Header title="Wine Country" />
          {/* <SideMenu /> */}
          <main className={classes.main}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/dashboard" component={WineBoard} />
              <Route exact path="/play/:wineType" component={Trivia} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    main: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  })
);
