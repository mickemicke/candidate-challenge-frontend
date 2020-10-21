import React, { useState } from "react";
import { EventInterface } from "./EventInterface";
import CreateEventDialog from "./CreateEventDialog";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

type CreateEvent = {
  createEvent: (data: EventInterface) => void;
};

function CreateEvent({ createEvent }: CreateEvent) {
  const [visibility, setVisibility] = useState(false);
  const handleVisibility = (value: boolean) => setVisibility(value);
  const creatEventWrapper = (data: EventInterface) => {
    setVisibility(false);
    createEvent(data);
  };
  return (
    <div>
      <IconButton color="inherit" onClick={() => handleVisibility(true)}>
        <AddIcon />
      </IconButton>
      <CreateEventDialog
        createEvent={creatEventWrapper}
        visibility={visibility}
        handleVisibility={handleVisibility}
      />
    </div>
  );
}

export default CreateEvent;
