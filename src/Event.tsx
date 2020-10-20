import React from 'react'
import { EventInterface } from "./EventInterface";

type Props = {
  event: EventInterface;
};

function Event({ event }: Props) {
  const { activity, endDate, startDate, location } = event;
  return (
    <div>
      {activity}
      {startDate} {endDate}
      {location}
    </div>
  );
}

export default Event;
