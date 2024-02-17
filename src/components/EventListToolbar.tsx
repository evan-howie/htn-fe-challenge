import React from "react";
import EventListToolbarSort from "./EventListToolbarSort";

type EventListToolbarProps = {
  sortAsc: boolean;
  toggleSort: () => void;
};

const EventListToolbar: React.FC<EventListToolbarProps> = ({
  sortAsc,
  toggleSort,
}) => {
  return (
    <div className="bg-gray-700 text-white p-3 flex gap-2">
      <EventListToolbarSort sortAsc={sortAsc} toggleSort={toggleSort} />
    </div>
  );
};

export default EventListToolbar;
