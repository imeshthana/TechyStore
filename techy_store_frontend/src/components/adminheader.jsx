import React from 'react'
import AdminNavbar from './adminNavbar'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <header>
        <div className='logo'>
            <h3 className="name">Admin Dashboard</h3>
        </div>
        <AdminNavbar />
        <div class="icons">
            <Link to='/'><i id="cart" class="fas fa-home"></i></Link>
        </div>
    </header>
  )
}

export default AdminHeader
