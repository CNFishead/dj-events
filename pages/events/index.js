import Link from "next/link";
import Layout from "@/components/layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No Events to show</h3>}
      {events &&
        events.map((evt) => {
          return <EventItem key={evt.id} evt={evt} />;
        })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: { events },
  };
}
