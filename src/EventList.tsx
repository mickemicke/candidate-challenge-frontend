import React from 'react'
import { EventInterface } from "./EventInterface";
import Event from "./Event";


type Props = {
  events: EventInterface[];
};

function EventList({ events }: Props) {
  return (
    <div>
      {
        events.map((event) => (
          <Event key={event._id} event={event} />
        ))
      }
    </div>
  )
}

export default EventList;
