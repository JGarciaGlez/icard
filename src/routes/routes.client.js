import { ClientLayout } from "../layouts/";
import { Error404 } from '../pages';
import { Home } from "../pages/Client";

 export const routesClient = [
  {
    path: "/",
    layout: ClientLayout,
    component: Home,
  },
  {
    layout:ClientLayout,
      component:Error404,
  },
];

