import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { Button } from '../ui/button'
import toast from 'react-hot-toast'

const AdminNav = () => {
  const navigate = useNavigate()
  const handleLogout = () =>{
    localStorage.removeItem('token')
    toast.success("Logout successfull.")
    navigate("/")
  }
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex items-center gap-3 text-white'>
      <Link to={"/"}>Home</Link>
      <Link to={"/admin/dashboard"}>Add Movie</Link>
      <Link to={"/admin/movies"}>All Movies</Link>
      </div>
      <Button className="bg-red-500 hover:bg-red-600" onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default AdminNav
