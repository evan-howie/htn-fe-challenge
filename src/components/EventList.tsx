import React from "react";
import { TEvent } from "../types/Event";
import Event from "./Event";
import EventListToolbar from "./EventListToolbar";

type EventListProps = {
  events: TEvent[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  const [sortAsc, setSortAsc] = React.useState(true);

  function toggleSort() {
    setSortAsc(!sortAsc);
  }

  function sortedEvents() {
    return events.sort((a, b) => {
      if (sortAsc) return a.start_time - b.start_time;
      return b.start_time - a.start_time;
    });
  }

  function eventList() {
    return sortedEvents().map((event) => (
      <Event key={event.id} event={event} />
    ));
  }

  return (
    <div className="container py-6 mx-auto px-10 flex flex-col gap-2">
      <EventListToolbar sortAsc={sortAsc} toggleSort={toggleSort} />
      {eventList()}
    </div>
  );
};

export default EventList;
