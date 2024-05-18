import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import AboutList from "./pages/AboutList";
import FlowerList from "./components/FlowerList";
import CardDetails from "./pages/CardDetails";
import FlowerDetails from "./pages/FlowerDetails";
import HomePage from "./pages/HomePage";
import CardList from "./components/CardList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/CardList",
        element: <CardList />,
      },
      {
        path: "/about",
        element: <AboutList />,
      },
      {
        path: "/details/:id",
        element: <CardDetails />,
      },
      {
        path: "/flowers/:id",
        element: <FlowerDetails />,
      },
      {
        path: "/flowers",
        element: <FlowerList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
