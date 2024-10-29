import React from 'react'
import "./App.css"
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'

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
      path:"/admin/dashboard",
      element:<AdminDashboard/>
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
