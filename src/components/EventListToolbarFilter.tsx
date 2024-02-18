import React, { useState } from "react";

const faChevronDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="h-4 inline-block"
  >
    <path d="M207 381.5L12.7 187.1c-9.4-9.4-9.4-24.6 0-33.9l22.7-22.7c9.4-9.4 24.5-9.4 33.9 0L224 284.5l154.7-154c9.4-9.3 24.5-9.3 33.9 0l22.7 22.7c9.4 9.4 9.4 24.6 0 33.9L241 381.5c-9.4 9.4-24.6 9.4-33.9 0z" />
  </svg>
);

const filterTypes = [
  { name: "All", value: "" },
  { name: "Workshop", value: "workshop" },
  { name: "Activity", value: "activity" },
  { name: "Tech Talk", value: "tech_talk" },
];

type EventListToolbarFilterProps = {
  filter: (filterType: string) => void;
};

const EventListToolbarFilter: React.FC<EventListToolbarFilterProps> = ({
  filter,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-white text-gray-700 py-1 px-6 h-fit"
      >
        Filter {faChevronDown}
      </button>
      {open && (
        <div className="absolute bg-white text-gray-700 text-nowrap right-0">
          {filterTypes.map((filterType) => (
            <div
              key={filterType.value}
              className="min-w-full border border-b-gray-300 py-1 px-6 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setOpen(false);
                filter(filterType.value);
              }}
            >
              {filterType.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventListToolbarFilter;
