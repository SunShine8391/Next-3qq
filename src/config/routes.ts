import type { Route } from "next";

const routes = {
  home: {
    login: "/login" as Route<string>,
    dashboard: "/dashboard" as Route<string>,
  },
};

export default routes;
