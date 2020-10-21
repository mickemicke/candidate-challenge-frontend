import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import callApi from "./callApi";
import { EventInterface } from "./EventInterface";
import EventList from "./EventList";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import createEntities from "./createEntities";

declare const process: {
  env: {
    REACT_APP_URL: string;
  };
};

const url: string = process.env.REACT_APP_URL;

const useStyles = makeStyles({
  app: {
    flexGrow: 1,
    padding: "10px",
  },
});

function App(): JSX.Element {
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [{ error, message }, setError] = useState({
    error: false,
    message: "",
  });
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const getEvents = async () => {
      const response = await callApi<EventInterface[]>(url);
      console.log("response :>> ", response);
      if (response instanceof Error) {
        setOpen(true);
        return setError({ error: true, message: response.message });
      }
    const entities = createEntities(response);
    console.log("entities :>> ", entities);
      setOpen(false);
    return setEvents(entities);
    };

  useEffect(() => {
    getEvents();
  }, []);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Container className={classes.app}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Could not get events. Please try again. Error: {message}
        </Alert>
      </Snackbar>
      <EventList events={events} />
    </Container>
  );
}

export default App;
