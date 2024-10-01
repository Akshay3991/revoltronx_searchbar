import React from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import Home from "./components/Home.jsx";
import Articles from "./components/Articles.jsx";
import "./index.css";
import SearchResults from "./components/SearchResults.jsx";
import Yvideos from "./components/Yvideos.jsx";
import AcademicPapers from "./components/AcademicPapers.jsx";
import BlogPosts from "./components/BlogPosts.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/searchresults",
        element: <SearchResults />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/videos",
        element: <Yvideos />,
      },
      {
        path: "/academicpapers",
        element: <AcademicPapers />,
      },
      {
        path: "/blogposts",
        element: <BlogPosts />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
