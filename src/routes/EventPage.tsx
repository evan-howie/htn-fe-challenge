import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EventDetail from "../components/EventDetail";
import { TEvent } from "../types/Event";
import EventList from "../components/EventList";

const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<TEvent>();
  const [relatedEvents, setRelatedEvents] = useState<TEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function fetchRelatedEvents(event: TEvent) {
    const fetchPromises = event.related_events.map((eventId: number) => {
      return fetch(`https://api.hackthenorth.com/v3/events/${eventId}`)
        .then((res) => res.json())
        .catch((error) => {
          setError(error);
        });
    });

    Promise.all(fetchPromises)
      .then((events) => {
        setRelatedEvents(events);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching related events:", error);
      });
  }

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.hackthenorth.com/v3/events/${id}`)
      .then((res) => res.json())
      .then((event) => {
        setEvent(event);
        setLoading(false);
        fetchRelatedEvents(event);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    return () => {
      setRelatedEvents([]);
    };
  }, [id]); // Depend on `id` to refetch if it changes

  if (loading || !event)
    return <div className="min-h-screen bg-gray-100">Loading...</div>;
  if (error)
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center gap-4">
        <span>Something went wrong!</span>
        <Link to="/" className="text-white bg-gray-700 py-2 px-6">
          Home
        </Link>
      </div>
    );

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <EventDetail event={event} />
        <h2 className="text-xl font-bold sm:text-2xl md:text-3xl text-center">
          Related Events
        </h2>
        <EventList events={relatedEvents} />
      </div>
    </>
  );
};

export default EventPage;
