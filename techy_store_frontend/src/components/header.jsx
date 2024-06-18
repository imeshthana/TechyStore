import React,{useState} from 'react'
import Navbar from './navbar';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const[admin, setAdmin] = useState({
      userName: '',
      password: ''
  })

  const toggleModal = () => {
      setModal(!modal);
  };

  function handleChange(event) {
      const {name,value} = event.target;

      setAdmin(prevUsers => {
          return{...prevUsers, [name]: value};
      });
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert("Log out successfully.")
    navigate('/');
};

  function handleLoginSubmit(event){
      event.preventDefault();
      if(admin.userName==="admin"||admin.password==="admin"){
        toggleModal();
        navigate('/dashboard');
        alert("Successfully logged in as admin")
      }
      else{
        alert("Incorrect user name or password")
      }
  }


  return (
    <div>
        <header>
            <div className="logo">
                <img src="logo.png" alt="logo" />
                <h3 className="name">Techy_Stores</h3>
            </div>

            <Navbar />

            <div class="icons">
                <Link to='/cart'><i id="cart" title='Go to Cart' class="fas fa-shopping-cart"></i></Link>
                <i onClick={toggleModal} id="user" title='Admin Log In' className="fas fa-user"></i>
                <i onClick={handleLogout} id="user" title='Log Out' className="fas fa-sign-out"></i>
            </div>

        </header>
            {modal && (
            <div className="admin-login-container">
                <div className="overlay"></div>
                <form className='login-form'>
                    <button className='login-close' onClick={toggleModal}>
                        <i id="user" className="fas fa-close"></i>
                    </button>
                    <h1 className="sub-title">Log In</h1>
                    <div>
                        <input onChange={handleChange} value={admin.userName} className="login-input" name="userName" placeholder="User Name" ></input>
                        <input onChange={handleChange} value={admin.password} className="login-input" name="password" placeholder="Password" ></input>
                    </div>
                    <button onClick={handleLoginSubmit}  type="submit" class="btn">Log In as Admin</button>
                </form>
            </div>
        )}
    </div>
  );
}

export default Header
