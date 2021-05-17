import Home from "../pages/Home";

import Login from "../pages/Login";

const routes = [
  { path: "/home", component: Home, title: "Menu Principal", needsAuth: true },

  { path: "/", component: Login, title: "Cola Laboratorio", needsAuth: false },
];

export default routes;


