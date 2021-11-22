import Link from "next/link";
import { useEffect } from "react";
import { Container } from "./Container";
import useSWR from "swr";
import RenderCache from "./RenderCache";

const Dashboard = ({ articles }) => {
  return (
    <Container height="100vh">
      <Link href="/account">
        <a>Account Home</a>
      </Link>
      <RenderCache />
    </Container>
  );
};

export default Dashboard;
