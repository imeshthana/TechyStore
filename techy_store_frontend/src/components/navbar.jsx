import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");

  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else {
      setActive("nav-menu");
    }

    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else {
      setIcon("nav-toggler");
    }
  };

  return (
    <nav className='navbar'>
      {/* <div onClick={navToggle} className='overlay-nav'></div> */}
      <div title='Menu' onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={active}>
          <a href="/">Home</a>
          <a href="#computers">Computers</a>
          <a href="#laptops">Laptops</a>
          <a href="#phones">Mobile Phones</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">About Us</a>
      </div>
    </nav>
  )
}

export default Navbar
