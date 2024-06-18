import React from 'react'
import AdminHeader from '../components/adminheader'
import AdminProducts from './admin/adminproducts'

const DashBoard = () => {
  return(
    <div id='dashboard'>
        <AdminHeader />
        <AdminProducts />
    </div>
  )
}

export default DashBoard
