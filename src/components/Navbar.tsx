import React, { useRef } from "react";
import { Link } from "../routes/custom-router";
import useRouter from "../routes/use-router";

/* eslint-disable no-unused-expressions */

const NavBar = ({ navItems }) => {
  const { query } = useRouter();
  const scrollingRef = useRef();


  const showLinkElement = (key, value) => {
    return (
      <Link route={`/account/${key}`} key={key}>
        <a
          {...(query?.page === key && { ref: scrollingRef })}
        >
          <strong>{value?.title}</strong>
        </a>
      </Link>
    );
  };

  return (
    <nav role="navigation">
      {Object.entries(navItems).map(([key, value]) => {
        if (value?.hidden) {
          return null;
        }

        if (value?.navItem) {
          const { link, linkTarget, linkType = "" } = value;
          if (linkType === "page") {
            // nextjs router page via the <Link element
            return showLinkElement(key, value);
          }
        }

        return null;
      })}
    </nav>
  );
};


export default NavBar;
