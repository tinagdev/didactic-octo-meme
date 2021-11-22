import React, { createContext } from "react";
import PropTypes from "prop-types";
import { Router } from "./custom-router";

export const RouterContext = createContext({
  asPath: null,
  pathname: null,
  query: {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
});

export const RouterProvider = ({ children, pathname, asPath, query }) => {
  const router = {
    // Pass pathname, asPath, query from parent component
    pathname,
    asPath,
    query: query || {},
    // Reference Router methods from next-routes
    readyCallbacks: Router.readyCallbacks,
    ready: Router.ready,
    push: Router.push,
    replace: Router.replace,
    reload: Router.reload,
    back: Router.back,
    prefetch: Router.prefetch,
    beforePopState: Router.beforePopState,
    pushRoute: Router.pushRoute,
    replaceRoute: Router.replaceRoute,
    prefetchRoute: Router.prefetchRoute,
    events: Router.events,
  };

  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};

RouterProvider.propTypes = {
  children: PropTypes.node.isRequired,
  query: PropTypes.object, // eslint-disable-line
  pathname: PropTypes.string,
  asPath: PropTypes.string,
};
