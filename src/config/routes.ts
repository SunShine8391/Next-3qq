import type { Route } from "next";

const routes = {
  user: {
    passcode: "/user/passcode" as Route<string>,
    signup: "/user/signup" as Route<string>,
    dashboard: "/user/dashboard" as Route<string>,
  },
  admin: {
    login: "/admin/login" as Route<string>,
    dashboard: "/admin/dashboard" as Route<string>,
    usermanage: "/admin/usermanage" as Route<string>,
  },
};

export default routes;
