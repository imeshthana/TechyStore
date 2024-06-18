import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  const [active, setActive] = useState("admin-nav-menu");
  const [icon, setIcon] = useState("nav-toggler");

  const navToggle = () => {
    if (active === "admin-nav-menu") {
      setActive("admin-nav-menu nav-active");
    } else setActive("admin-nav-menu");

    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };
  return (
    <nav className='navbar'>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={active}>
      <Link to="/dashboard">Products</Link>
        <Link to="/dashboard/adminOrders">Orders</Link>
        <Link to="/dashboard/adminReviews">Reviews</Link>
        <Link to="/dashboard/adminMessages">Messages</Link>
      </div>
    </nav>
  )
}

export default AdminNavbar
