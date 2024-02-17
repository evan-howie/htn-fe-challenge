import { TEvent } from "../types/Event";

export function formatDateTime(timestamp: number): string {
  const date = new Date(timestamp); // already in milliseconds
  return date.toLocaleString("en-US", {
    timeZone: "America/New_York", // This represents the Eastern Time Zone
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function getEventTime(event: TEvent): string {
  const start = formatDateTime(event.start_time);
  const end = formatDateTime(event.end_time);
  return `${start} - ${end}`;
}

export function getSpeakers(event: TEvent): string {
  const speakers = event.speakers.map((speaker) => speaker.name).join(", ");
  if (!speakers) return "";
  return `Speakers: ${speakers}`;
}

export const typeEmoji = {
  workshop: "🔨",
  activity: "🎮",
  tech_talk: "🎤",
};
