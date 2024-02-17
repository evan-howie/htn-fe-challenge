import { useEffect, useState } from "react";
import EventList from "../components/EventList";
import { TEvent } from "../types/Event";

const Home = () => {
  // set the initial state of events to an empty TEvent[]
  const [events, setEvents] = useState<TEvent[]>([]);

  useEffect(() => {
    // get all events from the API and set the state
    fetch("https://api.hackthenorth.com/v3/events")
      .then((res) => res.json())
      .then((data: TEvent[]) => {
        setEvents(data);
      });
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="py-10 bg-gray-100 border-t-2 border-gray-200 dark:border-gray-800">
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
