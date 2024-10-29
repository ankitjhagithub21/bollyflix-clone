import { Link } from 'react-router-dom'
import React from 'react'
import { Button } from '../ui/button'

const AdminNav = () => {
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex items-center gap-3 text-white'>
      <Link to={"/"}>Home</Link>
      <Link to={"/admin/dashboard"}>Add Movie</Link>
      <Link to={"/admin/movies"}>All Movies</Link>
      </div>
      <Button className="bg-red-500 hover:bg-red-600">Logout</Button>
    </div>
  )
}

export default AdminNav
