import React, { useState } from 'react'
import FollowUs from './followUs'
import AboutUs from './aboutUs'
import axios from 'axios';

const ContactUs = (props) => {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        subject: '',
        messageBody: ''
    })

    function handleChange(event) {
        const {name,value} = event.target;
        setMessage(prevMessage => {
          return{...prevMessage, [name]: value};
        });
    }

    // function sendMessage(event){
    //     event.preventDefault();
    //     setMessage({
    //         name:'',
    //         subject:'',
    //         messageBody:''
    //     })
    //     axios
    //     .post("http://localhost:3001/messages/", {message})
    //     .then((result) => console.log(result))
    //     .catch((error) => console.error('Error during signup:', error));  
    // }

    function sendMessage(event) {
    event.preventDefault();
    axios
        //.post("http://localhost:3001/api/messages/", message)
        .post("https://techy-store-app-api.onrender.com/api/messages/", message)
        .then((result) => {
            console.log(result);
            setMessage({ name: '', email: '', subject: '', messageBody: '' });
            alert('Message sent successfully!'); 
        })
        .catch((error) => {
            console.error('Error during message sending:', error);
            alert('Failed to send message'); 
        });
}


  return (
    <section id='contact' className="contact">
        <div className="row">
            <div class="content">
                <AboutUs />
                <FollowUs />
            </div>
            <div className="form">
                <div class="contactSubheadings">
                    <p>Contact Us</p>
                </div>
                <form>
                    <input onChange={handleChange} name="name" value={message.name} placeholder="name" class="box"></input>
                    <input onChange={handleChange} name="email" value={message.email} placeholder="email" class="box"></input>
                    <input onChange={handleChange} name="subject" value={message.subject}  placeholder="subject" class="box"></input>
                    <textarea onChange={handleChange} name="messageBody" value={message.messageBody}  cols="30" rows="10" class="box message"  placeholder="message"></textarea>
                    <button onClick={sendMessage} type="submit" class="btn"> send <i class="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactUs
