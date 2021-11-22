import {Link} from "../routes/custom-router";
import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import useSWR, { SWRConfig } from "swr";
import RenderCache from "../components/RenderCache";
import NavBar from "./Navbar";
import Dashboard from "./Dashboard";
import Wishlist from "./Wishlist";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const API_ENDPOINT =
  "https://619bff5868ebaa001753c71f.mockapi.io/api/v1/articles";

const Account = ({ articles, query }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    console.info("Query: ", query);
  }, [query]);
  
  useEffect(() => {
    console.info("Index Props: articles ", articles);
  }, [articles]);

  const { data, error } = useSWR(API_ENDPOINT, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const getPageContent = () => {
    switch (query.page) {
      case "dashboard":
        return <Dashboard />
      case "wishlist":
        return <Wishlist />
      default:
        return null;
    }
  };

  return (
    <SWRConfig value={{ provider: () => data }}>
      <Container height="100vh">
        <NavBar navItems={{
          dashboard: { hidden: false, navItem: true, linkType: "page", title: "Dashboard " },
          wishlist: { hidden: false, navItem: true, linkType: "page", title: "Wishlist" },
        }} />
        {getPageContent()}
      </Container>
    </SWRConfig>
  );
};

Account.getInitialProps = async ({ query, req }) => {
  const res = await fetch(
    "https://619bff5868ebaa001753c71f.mockapi.io/api/v1/articles"
  );
  const data = await res.json();

  return {
    articles: data,
    query: req?.app?.locals?.query || query

  };
};
export default Account;

