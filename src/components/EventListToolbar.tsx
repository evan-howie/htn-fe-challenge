import React from "react";
import EventListToolbarSort from "./EventListToolbarSort";
import EventListToolbarFilter from "./EventListToolbarFilter";
import EventListToolbarSearch from "./EventListToolbarSearchbar";

type EventListToolbarProps = {
  sortAsc: boolean;
  toggleSort: () => void;
  filter: (filterType: string) => void;
  search: (query: string) => void;
};

const EventListToolbar: React.FC<EventListToolbarProps> = ({
  sortAsc,
  toggleSort,
  filter,
  search,
}) => {
  return (
    <div className="bg-gray-700 text-white p-3 flex gap-2">
      <EventListToolbarSort sortAsc={sortAsc} toggleSort={toggleSort} />
      <EventListToolbarFilter filter={filter} />
      <EventListToolbarSearch search={search} />
    </div>
  );
};

export default EventListToolbar;
