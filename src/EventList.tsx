import React from "react";

import Grid from "@material-ui/core/Grid";
import { EventInterface } from "./EventInterface";
import Event from "./Event";

type Props = {
  events: EventInterface[];
};

function EventList({ events }: Props) {
  return (
    <Grid container spacing={3}>
      {events.map((event) => (
        <Event key={event._id} event={event} />
      ))}
    </Grid>
  );
}

export default EventList;
