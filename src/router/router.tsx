import Home from "@src/pages/Home/home";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <>chi tiet</>,
  },
]);

const RouterRoot = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
export default RouterRoot;
