import Link from "next/link";
import { useEffect } from "react";
import { Container } from "../components/Container";
import useSWR from "swr";
import RenderCache from "../components/RenderCache";

const HelloWorld = ({ articles }) => {
  return (
    <Container height="100vh">
      <Link href="/">
        <a>Home</a>
      </Link>
      <RenderCache />
    </Container>
  );
};

export default HelloWorld;
