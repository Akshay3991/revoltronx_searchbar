import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from '../components/Home.jsx'
import Articles from '../components/Articles.jsx'
import SearchResults from '../components/SearchResults.jsx'
import Yvideos from '../components/Yvideos.jsx'
import AcademicPapers from '../components/AcademicPapers.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home/>,
      },
      {
        path: '/searchresults',
        element: <SearchResults />,
      },
      {
        path: '/articles',
        element: <Articles />,
      },
      {
        path: '/yvideos',
        element: <Yvideos />,
      },
      {
        path: '/academicpapers',
        element: <AcademicPapers />,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
