import Link from "next/link";
import { useEffect } from "react";
import { Container } from "./Container";
import useSWR, { useSWRConfig } from "swr";
import RenderCache from "./RenderCache";

const Wishlist = () => {
  const { cache } = useSWRConfig();

  useEffect(() => {
    // console.info(cache);
  }, [cache]);

  return (
    <Container height="100vh">
      <Link href="/">
        <a>Account Home</a>
      </Link>
      {cache.length &&
        cache.map((a) => <li key={a.createdAt}>{a.title}</li>)}
    </Container>
  );
};

export default Wishlist;
