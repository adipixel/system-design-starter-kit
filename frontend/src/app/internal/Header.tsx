import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core/styles";

import { themeNameSelector, toggleThemeAction } from "../app.slice";

export type HeaderProps = {
  title: string;
};

export function Header(props: HeaderProps) {
  const { title } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const themeName = useSelector(themeNameSelector);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          {title}
        </Typography>
        <IconButton
          aria-label="switch theme"
          color="inherit"
          onClick={() => {
            dispatch(toggleThemeAction());
          }}
        >
          {themeName === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

// export const Header = connect(null, { setTheme })(HeaderComponent);
