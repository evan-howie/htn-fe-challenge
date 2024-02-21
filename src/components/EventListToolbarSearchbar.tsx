import React from "react";

type EventListToolbarSearchProps = {
  search: (query: string) => void;
};
const EventListToolbarSearch: React.FC<EventListToolbarSearchProps> = ({
  search,
}) => {
  return (
    <input
      type="text"
      className="bg-white text-gray-700 p-1 px-2 rounded"
      placeholder="Search"
      onChange={(e) => search(e.target.value)}
    />
  );
};

export default EventListToolbarSearch;
