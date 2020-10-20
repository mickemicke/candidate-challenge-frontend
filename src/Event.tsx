import React from 'react'
import { EventInterface } from "./EventInterface";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ClockIcon from "@material-ui/icons/Schedule";
import PlaceIcon from "@material-ui/icons/Place";
import EventIcon from "@material-ui/icons/Event";

type Props = {
  event: EventInterface;
};

function Event({ event }: Props) {
  const { activity, endDate, startDate, location } = event;
  return (
    <Grid item>
      <Paper>
        <List>
          <ListItem>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary={activity} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <ClockIcon />
            </ListItemIcon>
            <ListItemText primary={startDate} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <ClockIcon />
            </ListItemIcon>
            <ListItemText primary={endDate} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText primary={location} />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
}

export default Event;
