import React from "react";
import { TEvent } from "../types/Event";
import { useNavigate } from "react-router-dom";
import { typeEmoji, getEventTime, getSpeakers } from "../utils/event.ts";

type EventListEntryProps = {
  event: TEvent;
};

const EventListEntry: React.FC<EventListEntryProps> = ({ event }) => {
  const navigate = useNavigate();
  function onClick() {
    navigate(`/event/${event.id}`);
  }

  return (
    <div
      className="bg-gray-200 p-2 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <h3 className="font-bold">
        {typeEmoji[event.event_type]} | {event.name}
      </h3>
      <span className="italic text-sm text-gray-400">
        {getEventTime(event)}
      </span>
      <h4 className="text-sm text-gray-700">{getSpeakers(event)}</h4>
      {event.description && (
        <p className="text-sm text-gray-500">{event.description}</p>
      )}
    </div>
  );
};

export default EventListEntry;
