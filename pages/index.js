import Link from "next/link";
import Layout from "@/components/layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No Events to show</h3>}
      {events &&
        events.map((evt) => {
          return <EventItem key={evt.id} evt={evt} />;
        })}
      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${API_URL}/api/events?populate=*_sort=date:ASC&_limit=3`
  );
  const json = await res.json();
  const events = json.data;
  return {
    props: { events },
  };
}
