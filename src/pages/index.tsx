import Link from "next/link";
import { useEffect } from "react";
import { Container } from "../components/Container";
import useSWR, { SWRConfig } from "swr";
import RenderCache from "../components/RenderCache";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const API_ENDPOINT =
  "https://619bff5868ebaa001753c71f.mockapi.io/api/v1/articles";

const Index = ({ articles }) => {
  useEffect(() => {
    console.info("Index Props: articles ", articles);
  }, [articles]);

  const { data, error } = useSWR(API_ENDPOINT, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <SWRConfig value={{ provider: () => data }}>
      <Container height="100vh">
        <Link href="/hello-world">
          <a>Hello World Page</a>
        </Link>
        {data.map((d) => (
          <li>{d.title}</li>
        ))}
      </Container>
    </SWRConfig>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://619bff5868ebaa001753c71f.mockapi.io/api/v1/articles"
  );
  const data = await res.json();

  return {
    articles: data,
  };
};
export default Index;
