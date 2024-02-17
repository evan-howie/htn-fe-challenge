import React from "react";
import { TEvent } from "../types/Event";
import Event from "./Event";

type EventListProps = {
  events: TEvent[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="container py-6 mx-auto px-10 flex flex-col gap-2">
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
