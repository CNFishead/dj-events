import { useRouter } from "next/router";
import Layout from "../../components/layout";

export default function EventPage() {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <h1>My Events</h1>
      <h3>{router.query.slug}</h3>
    </Layout>
  );
}
