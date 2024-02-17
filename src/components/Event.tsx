import React from "react";
import { TEvent } from "../types/Event";

type EventProps = {
  event: TEvent;
};

const typeEmoji = {
  workshop: "🔨",
  activity: "🎮",
  tech_talk: "🎤",
};

function formatDateTime(timestamp: number): string {
  const date = new Date(timestamp); // already in milliseconds
  return date.toLocaleString("en-US", {
    timeZone: "America/New_York", // This represents the Eastern Time Zone
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function getEventTime(event: TEvent): string {
  const start = formatDateTime(event.start_time);
  const end = formatDateTime(event.end_time);
  return `${start} - ${end}`;
}

function getSpeakers(event: TEvent): string {
  const speakers = event.speakers.map((speaker) => speaker.name).join(", ");
  if (!speakers) return "";
  return `Speakers: ${speakers}`;
}

const Event: React.FC<EventProps> = ({ event }) => {
  // check auth if private
  // if (event.permission == "private" && !isAuth()) return null;

  return (
    <div className="bg-gray-200 p-2 rounded-lg cursor-pointer">
      <h3 className="font-bold">
        {typeEmoji[event.event_type]} | {event.name}
      </h3>
      <span className="italic text-sm text-gray-400">
        {getEventTime(event)}
      </span>
      <h4 className="text-sm text-gray-700">{getSpeakers(event)}</h4>
      <p className="text-sm text-gray-500">{event.description}</p>
    </div>
  );
};

export default Event;
