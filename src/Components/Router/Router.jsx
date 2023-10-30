import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Login from "../Login/Login";
import Register from "../Contact/register";
import Book from "../Book/Book";
import Booking from "../Booking/Booking";
import PrivateRout from "../PrivateRoute/PrivateRout";
import { AuthContext } from "../AuthProvider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRout>
            <Book />
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/booking",
        element: (
          <PrivateRout>
            <Booking />
          </PrivateRout>
        ),
      },
    ],
  },
]);
export default router;
