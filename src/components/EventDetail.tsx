import React from "react";
import { TEvent } from "../types/Event";
import { typeEmoji, getEventTime, getSpeakers } from "../utils/event";

type EventDetailProps = {
  event: TEvent;
};

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  return (
    <div className="p-2">
      <header className="py-10 bg-gray-100">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-center">
          {typeEmoji[event.event_type]} | {event.name}
        </h1>
      </header>
      <div className="container py-6 mx-auto px-6 sm:px-10 md:px-24 flex flex-col gap-2">
        <div className="italic text-lg text-gray-600 text-center">
          {getEventTime(event)}
        </div>
        <h3 className="text-gray-700">{getSpeakers(event)}</h3>
        {event.description && (
          <p className="text-gray-500">{event.description}</p>
        )}

        <div className="py-4"></div>

        <h3>
          Public URL:{" "}
          <a
            href={event.public_url}
            className="text-gray-600 hover:text-gray-500"
          >
            {event.public_url}
          </a>
        </h3>

        <h3>
          Hacker URL:{" "}
          <a
            href={event.private_url}
            className="text-gray-600 hover:text-gray-500"
          >
            {event.private_url}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default EventDetail;
