import { useEffect, useState } from "react";
import EventList from "../components/EventList";
import { TEvent } from "../types/Event";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const [events, setEvents] = useState<TEvent[]>([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    fetch("https://api.hackthenorth.com/v3/events")
      .then((res) => res.json())
      .then((events: TEvent[]) => {
        if (!isAuthenticated) {
          // if permission missing, assume private
          events = events.filter((event) => event.permission === "public");
        }
        setEvents(events);
      });
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="py-10 bg-gray-100">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center">
          Upcoming Events
        </h1>
      </header>

      <main className="flex-1 bg-gray-100 dark:bg-gray-800">
        <EventList events={events} />
      </main>
    </div>
  );
};

export default Home;
