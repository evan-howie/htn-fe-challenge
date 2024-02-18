import React from "react";
import { TEvent } from "../types/Event";
import EventListEntry from "./EventListEntry";
import EventListToolbar from "./EventListToolbar";

type EventListProps = {
  events: TEvent[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  const [sortAsc, setSortAsc] = React.useState(true);
  const [filterType, setFilterType] = React.useState("");

  function toggleSort() {
    setSortAsc(!sortAsc);
  }

  function sortedEvents(events: TEvent[]) {
    return events.sort((a, b) => {
      if (sortAsc) return a.start_time - b.start_time;
      return b.start_time - a.start_time;
    });
  }

  function filteredEvents(events: TEvent[]) {
    if (!filterType) return events;
    return events.filter((event) => event.event_type === filterType);
  }

  function eventList() {
    return sortedEvents(filteredEvents(events)).map((event) => (
      <EventListEntry key={event.id} event={event} />
    ));
  }

  return (
    <div className="container py-6 mx-auto px-6 sm:px-10 md:px-24 flex flex-col gap-2">
      <EventListToolbar
        sortAsc={sortAsc}
        toggleSort={toggleSort}
        filter={setFilterType}
      />
      {eventList()}
    </div>
  );
};

export default EventList;
