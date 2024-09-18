import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home/component";
import { LandingPage } from "../page/LandingPage/component";
import { NotFound } from "../shared/components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
