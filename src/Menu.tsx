import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import CreateEvent from "./CreateEvent";
import { EventInterface } from "./EventInterface";
import { makeStyles } from "@material-ui/core";

type MenuType = {
  createEvent: (data: EventInterface) => void;
};

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

function Menu({ createEvent }: MenuType): JSX.Element {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.title}>
          Event Manager
        </Typography>
        <CreateEvent createEvent={createEvent} />
      </Toolbar>
    </AppBar>
  );
}

export default Menu;
