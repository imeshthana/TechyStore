import React,{useState} from 'react'
import axios from 'axios';
import cartItems from '../cartData';

const Product = (props) => {
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);
  // const [cartItem, setCartItem] = useState({
  //   productName:props.productName,
  //   price:props.price,
  //   count:''
  // })

  const toggleModal = () => {
    setModal(!modal);
  };

  const increase = () => {
    if(count>=1) setCount(count + 1);
  }

  const decrease = () => {
    if(count>=2) setCount(count - 1);
  }

  // const addToCart = () => {
  //   const cartItem = {
  //     item: props.productName, 
  //     price: props.price,
  //     count: count
  //   };

  //   axios
  //   .post('http://localhost:3001/api/cartItems/', cartItem)
  //   .then(result => {
  //     console.log('Item added to cart:', result);
  //     alert("Item added to cart")
  //   })
  //   .catch(error => {
  //     console.error('Error adding item to cart:', error);
  //     alert("Error adding item to cart")
  //   });

  //   toggleModal();
  //   };

    function addToCart(event){
        //props.onAdd(cartItem);
        event.preventDefault(); //preventing reloading the page when submitting
        const newItem = {
          productName:props.productName,
          price:props.price,
          count:count
        }
        cartItems.push(newItem);
        toggleModal();
    }

  return (
    <div>
      <div className="box">
          <img src={props.image} alt='img'/>
          <h3>{props.productName}</h3>
          <div className="price">Rs. {props.price}</div>
          <button onClick={toggleModal} class="btn">View Details</button>
      </div>
      
      {modal && (
        <div className='product-container'>
          <div className="overlay"></div>
          <div className='product-box'>
            <button className='login-close' onClick={toggleModal}>
              <i id="user" className="fas fa-close"></i>
            </button>
            <img src={props.image} alt='img'/>
            <div className='product-details'>
              <h3 className='sub-title'>{props.productName}</h3>
              <h3 className="subtitle">Rs. {props.price}</h3>
              <h7 className='description'>{props.description}</h7>
              <div className='count'>
                <button onClick={decrease}><i className='fas fa-minus'></i></button>
                <h2>{count}</h2>
                <button onClick={increase}><i className='fas fa-plus'></i></button>
              </div>
              <button onClick={addToCart} className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


export default Product
