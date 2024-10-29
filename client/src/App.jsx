import React from 'react'
import "./App.css"
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import MovieDetails from './pages/MovieDetails'
import AdminMovies from './pages/AdminMovies'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/movies/:id",
      element:<MovieDetails/>
    },
    {
      path:"/admin/dashboard",
      element:<AdminDashboard/>
    },
    {
      path:"/admin/movies",
      element:<AdminMovies/>
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
