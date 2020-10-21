import React from "react";

import Grid from "@material-ui/core/Grid";
import { EventInterface } from "./EventInterface";
import Event from "./Event";
import { makeStyles, Theme } from "@material-ui/core";

type Props = {
  events: EventInterface[];
};

const useStyles = makeStyles((theme: Theme) => ({
  "MuiGrid-spacing-xs-3": {
    marginTop: 0,
  },
}));

function EventList({ events }: Props) {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes["MuiGrid-spacing-xs-3"]} >
      {events.map((event, i: number) => (
        <Event key={`${event._id}_${i}`} event={event} />
      ))}
    </Grid>
  );
}

export default EventList;
