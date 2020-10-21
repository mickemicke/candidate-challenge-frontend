import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { EventInterface } from "./EventInterface";
import dayjs from "dayjs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formContainer: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      padding: "10px",
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    dialogTitle: {
      textAlign: "center",
    },
  })
);

type CreateEventType = {
  createEvent: (data: EventInterface) => void;
  visibility: boolean;
  handleVisibility: (value: boolean) => void;
};

function CreateEventDialog({
  createEvent,
  visibility,
  handleVisibility,
}: CreateEventType): JSX.Element {
  const classes = useStyles();
  const [activity, setActivity] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(
    dayjs().format("YYYY-MM-DD[T]HH:mm")
  );
  const [endDate, setEndDate] = useState(
    dayjs().add(1, "hour").format("YYYY-MM-DD[T]HH:mm")
  );

  const handleActivityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivity(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const submitEvent = (): void => {
    const data = {
      activity,
      location,
      startDate: dayjs(startDate).format("YYYY-M-DD HH:mm"),
      endDate: dayjs(endDate).format("YYYY-M-DD HH:mm"),
    };
    createEvent(data);
  };

  return (
    <Dialog
      onClose={() => handleVisibility(false)}
      aria-labelledby="simple-dialog-title"
      open={visibility}
    >
      <DialogTitle className={classes.dialogTitle} id="simple-dialog-title">
        Create new event
      </DialogTitle>
      <DialogContent>
        <form noValidate autoComplete="off" className={classes.formContainer}>
          <TextField
            id="activity"
            label="Activity"
            value={activity}
            onChange={handleActivityChange}
            variant="filled"
          />
          <TextField
            id="location"
            label="Location"
            value={location}
            onChange={handleLocationChange}
            variant="filled"
          />
          <TextField
            id="datetime-local"
            label="Select start time"
            type="datetime-local"
            onChange={handleStartDateChange}
            value={startDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="datetime-local"
            label="Select end time"
            type="datetime-local"
            onChange={handleEndDateChange}
            value={endDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <DialogActions>
          <Button onClick={() => handleVisibility(false)} color="primary">
            Cancel
          </Button>
          <Button color="primary" variant="contained" onClick={submitEvent}>
            Submit
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default CreateEventDialog;
