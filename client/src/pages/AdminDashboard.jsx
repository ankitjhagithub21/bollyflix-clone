
import AddMovie from '@/components/custom/AddMovie'
import AdminNav from '@/components/custom/AdminNav'
import React from 'react'

const AdminDashboard = () => {
  return (
    <div className='max-w-6xl mx-auto'>
     <AdminNav/>
     <AddMovie/>
    </div>
  )
}

export default AdminDashboard
