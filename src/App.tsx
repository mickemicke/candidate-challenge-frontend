import React, { useState, useEffect } from "react";
import "./App.css";
import callApi from "./callApi";
import { EventInterface } from "./EventInterface";
import EventList from "./EventList";

declare const process: {
  env: {
    REACT_APP_URL: string;
  };
};

const url: string = process.env.REACT_APP_URL;

function App(): JSX.Element {
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [error, setError] = useState({ error: false, message: "" });
  useEffect(() => {
    const getEvent = async () => {
      const response = await callApi<EventInterface[]>(url);
      console.log("response :>> ", response);
      if (response instanceof Error) {
        return setError({ error: true, message: response.message });
      }

      return setEvents(response);
    };
    getEvent();
  }, []);

  return (
    <div className="App">
      <EventList events={events} />
    </div>
  );
}

export default App;
