import React,{useState,useEffect} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PlaceOrder from '../../components/placeOrder'
import UserOrders from '../../components/userOrders'
import axios from 'axios';
import cartItems from '../../cartData'

const Cart = (props) => {
  const [itemsList, setItems] = useState(cartItems);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    const total = itemsList.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.count * currentItem.price;
    }, 0);
    setTotalPrice(total);
  };

  function deleteItem(id) {
    const updatedCartItems = cartItems.filter((item, index) => index !== id);
    setItems(updatedCartItems);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, [itemsList]);

  return (
    <div>
      <Header />
      <div id="cart">
          <div class="row">
              <div class="list">
                <div>
                    <p className='contactSubheadings'>Products</p>
                </div>
                {/* {itemsList.map((productItem) => {
                  return (
                      <UserOrders 
                          key={productItem._id}
                          id={productItem._id}
                          item={productItem.item} 
                          price={productItem.price}
                          count={productItem.count}
                          //onDelete={deleteItem}
                      />
                  );
                })} */}
                {itemsList.map((productItem, index)=>{
                  return(
                    <UserOrders
                      key={index}
                      id={index}
                      item={productItem.productName}
                      price={productItem.price}
                      count={productItem.count}
                      onDelete={deleteItem}
                    />
                  )
                })}
              </div>
              <div className='form'>
                  <div class="totalprice">
                    <p>Total Price</p>
                    <h1>Rs. {totalPrice}</h1>
                  </div>
                  <PlaceOrder totalPrice={totalPrice}/>
              </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default Cart


  // function editCount() {
  //     setProduct(order => {
  //         return ;
  //     })
  // }



    // useEffect(() => {
  //   axios
  //     .get('http://localhost:3001/api/cartItems/all')
  //     .then(response => {
  //       setItems(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching items:', error);
  //     });
  // }, []);

  // function deleteItem(id) {
  //   axios.delete(`http://localhost:3001/api/cartItems/${id}`)
  //     .then(response => {
  //       setItems(prevItems => prevItems.filter(item => item._id !== id));
  //     })
  //     .catch(error => {
  //       console.error('Error deleting item:', error);
  //     });
  // }