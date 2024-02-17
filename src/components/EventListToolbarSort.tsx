import React from "react";

type EventListToolbarSortProps = {
  sortAsc: boolean;
  toggleSort: () => void;
};
const EventListToolbarSort: React.FC<EventListToolbarSortProps> = ({
  sortAsc,
  toggleSort,
}) => {
  return (
    <button className="bg-white text-gray-700 py-1 px-6" onClick={toggleSort}>
      Sort by Start Date {sortAsc ? "⬆" : "⬇"}
    </button>
  );
};

export default EventListToolbarSort;
