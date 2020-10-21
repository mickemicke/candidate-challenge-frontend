import React, { useState, useEffect } from "react";
import callApi from "./callApi";
import { EventInterface } from "./EventInterface";
import EventList from "./EventList";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import createEntities from "./createEntities";
import Menu from "./Menu";

declare const process: {
  env: {
    REACT_APP_URL: string;
  };
};

const url: string = process.env.REACT_APP_URL;

function App(): JSX.Element {
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [{ error, message }, setError] = useState({
    error: false,
    message: "",
  });
  const [open, setOpen] = useState(false);
  const getEvents = async () => {
    const response = await callApi<EventInterface[]>(url);
    // console.log("response :>> ", response);
    if (response instanceof Error) {
      setOpen(true);
      return setError({ error: true, message: response.message });
    }
    const entities = createEntities(response);
    // console.log("entities :>> ", entities);
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

  const createEvent = async (data: EventInterface): Promise<void> => {
    console.log("data :>> ", data);
    const response = await callApi<EventInterface>(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log("response :>> ", response);
    if (response instanceof Error) {
      setOpen(true);
      return setError({ error: true, message: response.message });
    }
    // vi brukade ofta bara göra ett anrop till här för statet kunde bli väldigt knasigt ibland
    // ett api anrop kan vara värt för att garantera sanningen efter man lagt till nånting på servern
    getEvents();

    // annars
    // detta blev ju fel direkt lustigt nog, just pga att jag har ändrat saker på klienten
    // eftersom det ligger duplicates i events, så kommer den skapa dubletter en gång till så man får 
    // 4 av varje event som går över dygnet, och det blir ju bara fler desto fler man skapar
    // const updatedEvents = [...events, response];
    // const entitites = createEntities(updatedEvents);
    // return setEvents(entitites);
  };

  return (
    <Container>
      <Menu createEvent={createEvent} />
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
