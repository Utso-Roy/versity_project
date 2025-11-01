import React from "react";

import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Destination from "../Pages/Destination";
import Packages from "../Pages/Packages";
import Gallery from "../Pages/Gallery";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Error from "../Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
