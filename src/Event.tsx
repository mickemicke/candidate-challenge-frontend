import React from "react";
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
import { makeStyles } from "@material-ui/core/styles";

/* 
  isDuplicate/hasDuplicate är ett lite tafatt försök att få gränssnittet att vara lite mindre förvirrande,
  uppgiften var bara att skapa 2 delar av ett event som går över dygnsgränsen, men att ha två exakt likadana
  events brevid varandra är bara maximalt förvirrande. Har man sin events i en kalanderliknande vy så är 
  det lite tydligare var dom slutar och börjar. Men tänkte att jag vill ha nått sätt att få dom att hänga ihop på,
  även om det inte blev det vackraste nånsin. Har man dessutom två events i rad som båda går över dygnsgränsen
  så kommer det finnas 4st events med samma färg, så inte helt optimalt i längden :D
  Men det är nånting iallafall!
*/

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: `${theme.palette.warning.main}7F`, // 7f is 50% opacity, the material ui color is a hex
  },
}));

type Props = {
  event: EventInterface;
};

function Event({ event }: Props) {
  const {
    activity,
    endDate,
    startDate,
    location,
    isDuplicate,
    hasDuplicate,
  } = event;
  const classes = useStyles();
  return (
    <Grid item>
      <Paper className={isDuplicate || hasDuplicate ? classes.root : ""}>
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
            <ListItemText primary={isDuplicate ? "---" : startDate} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <ClockIcon />
            </ListItemIcon>
            <ListItemText primary={hasDuplicate ? "---" : endDate} />
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
