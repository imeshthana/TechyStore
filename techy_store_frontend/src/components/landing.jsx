import React,{useState} from 'react'
import Slider from './slider'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Landing = () => {
    const slides = [
        { path: "/slide_images/image1.jpg", title: "Laptops" },
        { path: "/slide_images/image2.jpg", title: "Computers" },
        { path: "/slide_images/image3.jpg", title: "Tablets" },
        { path: "/slide_images/image4.jpg", title: "Mobile Phones" },
    ]

    const sliderContainer = {
        width: "900px",
        height: "550px",
    };

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);

    const toggleModal1 = () => {
        setModal1(!modal1);
    };

    const toggleModal2 = () => {
        setModal1(!modal1)
        setModal2(!modal2);
    };

    const[user, setUser] = useState({
        userName: '',
        password: ''
    })

    function handleChange(event) {
        const {name,value} = event.target;

        setUser(prevUsers => {
            return{...prevUsers, [name]: value};
        });
    }

    const handleLoginSubmit = (event) => {
        axios
            //.post('http://localhost:3001/api/users/login', user)
            .post('https://techy-store-app-api.onrender.com/api/users/login', user)
            .then(response => {
                console.log(response.data);
                alert('Login successful!');
                localStorage.setItem('token', response.data.token);
            })
            .catch(error => {
                console.error('Login failed:', error);
                alert('Login failed!');
            });
    };

    const[newUser, setNewUser] = useState({
        email:'',
        userName: '',
        password: ''
    })

    function handleChange1(event) {
        const {name,value} = event.target;
        setNewUser(prevUsers => {
            return{...prevUsers, [name]: value};
        });
    }

    const handleSignupSubmit = (event) => {
        // event.preventDefault();
        axios
            .post('https://techy-store-app-api.onrender.com/api/users/', newUser)
            .then(response => {
                console.log(response.data);
                alert('Sign up succecfully!');
            })
            .catch(error => {
                console.error('Signup failed:', error);
                alert('Signup failed!');
            });
    };

  return (
    <section className="home" id="home">
        <div className="content">
            <div className='headtext'>
                <h1>Tech</h1>
                <h1>Redefined</h1>
                <h1>Here...</h1>
                <p>"Elevate your digital experience with top-quality tech products, all in one place."</p>
            </div>
            <button className="btn" title='Login or Signup' onClick={toggleModal1}>Shop Now</button>
        </div>
        <div class="slider">
                <div style={sliderContainer}>
                    <Slider slides={slides} parentWidth={900}/>
                </div>
        </div>
        {modal1 && (
            <div className="login-container">
                <div className="overlay"></div>
                <form className='login-form'>
                    <button className='login-close' onClick={toggleModal1}>
                        <i id="user" className="fas fa-close"></i>
                    </button>
                    <h1 className="sub-title">Log In</h1>
                    <div>
                        <input onChange={handleChange} value={user.userName} className="login-input" 
                        name="userName" placeholder="User Name" autoComplete='off' ></input>
                        <input onChange={handleChange} value={user.password} className="login-input" 
                        name="password" placeholder="Password" autoComplete='off' type="password"></input>
                    </div>
                    <button onClick={handleLoginSubmit} type="submit" class="btn">Log In</button>
                    <p>Don't have an account</p>
                    <button onClick={toggleModal2} type="submit" class="login-btn">Sign In </button>
                </form>
            </div>
        )}
        {modal2 && (
            <div className="login-container">
                <div className="overlay"></div>
                <form className='login-form'>
                    <button className='login-close' onClick={toggleModal2}>
                        <i id="user" className="fas fa-close"></i>
                    </button>
                    <h1 className="sub-title">Sign In</h1>
                    <div className='input-container'>
                        <input onChange={handleChange1} value={newUser.email} className="login-input"
                         name="email" placeholder="Email Address" autoComplete='off' />
                        <input onChange={handleChange1} value={newUser.userName} className="login-input"
                         name="userName" placeholder="User Name" autoComplete='off' />
                        <input onChange={handleChange1} value={newUser.password} className="login-input" 
                         name="password" placeholder="Password" autoComplete='off' type="password"/>
                    </div>
                    <button onClick={handleSignupSubmit} type="submit" class="btn">Sign In </button>
                </form>
            </div>
        )}
    </section>
  )
}

export default Landing;
