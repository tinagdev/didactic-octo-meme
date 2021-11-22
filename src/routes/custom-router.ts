const routes = require("next-routes");
const appRoutes = routes()

  appRoutes.add({
    name: "account",
    pattern: `/account/:page`,
    page: "account",
  });


  // Handle 404s on unsupported account wildcard routes
  appRoutes.add({
    name: "account-error",
    pattern: `/account/:missingPage*`,
    page: "_error",
  });

module.exports = appRoutes;
