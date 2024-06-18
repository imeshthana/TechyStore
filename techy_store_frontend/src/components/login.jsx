import React,{useState} from "react";
import { Link } from 'react-router-dom';


function Login() {
  const[user, setUser] = useState({
    userName: '',
    password: '',
  })

  function handleChange(event) {
    const {name,value} = event.target;

    setUser(prevProduct => {
      return{...prevProduct, [name]: value};
    });
  }

  return(
    <div>
        <h1 className="title">Techy_Store</h1>
        <div className="login-container">
        <form className='login-user'>
            <h2 className="sub-title">Log In</h2>
            <input onChange={handleChange} value={user.userName}  className="login-input" name="UserName" placeholder="User Name" />
            <input onChange={handleChange} value={user.password}  className="login-input" name="Password" placeholder="Password" />
            <button type="submit" class="btn">Log In </button>
            <p>Don't have an account</p>
            <Link to="/signin"><button  type="submit" class="btn">Sign In </button></Link>
        </form>
        </div>
    </div>
  )
}

export default Login;
