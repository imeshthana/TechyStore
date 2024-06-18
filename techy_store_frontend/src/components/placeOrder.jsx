import React,{useState} from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
// import jwt from 'jsonwebtoken';

const PlaceOrder = ({ totalPrice }) => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userToken = localStorage.getItem('token'); 

  //const decodedToken = jwt.decode(userToken);
  //const userName = decodedToken ? decodedToken.userName : 'imesh'; 

  const[order, setOrder] = useState({
    userName:'imesh',
    address: '',
    totalPrice: totalPrice,
    contactNumber: '',
    cardNumber:'',
    postal:'',
    cardHoldersName:'',
    evcNumber:''
  })

  function handleChange(event) {
    const {name,value} = event.target;
    setOrder(prevOrder => {
      return{...prevOrder, [name]: value};
    });
  }

  function submitOrder(event) {
    if(!userToken)
    axios
    .post('https://techy-store-app-api.onrender.com/api/orders/', order)
    .then((result) => {
        console.log(result);
        setOrder({
          userName: 'imesh', 
          address: '',
          totalPrice: totalPrice,
          contactNumber: '',
          cardNumber: '',
          postal:'',
          cardHoldersName:'',
          evcNumber:''
        });
        alert("Order successfully placed!")
    })
    .catch((error) => {
        console.error(error);
        alert("Order Placement failed!")
    });
  }

  return (
    <div>
      <h1 class="subheadings">Delivery</h1>
      <form className='delivery-form'>
        <input onChange={handleChange} name='address' value={order.address} placeholder='Address' class='box'/>
        <div className='delivery-form-row'>
            <input onChange={handleChange} value={order.contactNumber} name='contactNumber'  placeholder='Contact Number' className='box'/>
            <input onChange={handleChange} value={order.postal} name='postal' placeholder='Postal Code' className='postal'/>
        </div>
      </form>
      <h1 class="subheadings">Purchase</h1>
      <form className='delivery-form'>
        <input  onChange={handleChange} value={order.cardHoldersName} name='cardHoldersName' placeholder="Card Holder's Name" class='box'/>
        <div className='delivery-form-row'>
            <input onChange={handleChange} value={order.cardNumber} name='cardNumber' placeholder='Card Number' className='box'/>
            <input onChange={handleChange} value={order.evcNumber} name='evcNumber'  placeholder='EVC Number' className='evc'/>
        </div>
      </form>
      <button onClick={submitOrder} type="submit" class="btn">Buy Now  <i class="fas fa-credit-card"></i></button>
    </div>
  )
}

export default PlaceOrder
