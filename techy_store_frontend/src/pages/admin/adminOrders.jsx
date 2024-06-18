import React,{useState, useEffect} from 'react'
import axios from 'axios';
import AdminHeader from '../../components/adminheader'
import AdminOrder from '../../components/adminOrder'

const AdminOrders = () => {
  const [ordersList, setOrder] = useState([]);

  // function deleteMessage(id) {
  //   setMessage(messagesList => {
  //       return messagesList.filter((messageItem, index) => {
  //           return index !== id;
  //       })
  //   });
  // }

  useEffect(() => {
    axios.get('https://techy-store-app-api.onrender.com/api/orders/all')
      .then(response => {
        setOrder(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  function deleteMessage(id) {
    axios.delete(`https://techy-store-app-api.onrender.com/api/orders/${id}`)
      .then(response => {
        setOrder(prevOrders => prevOrders.filter(order => order._id !== id));
        alert("Order deleted successfully!")
      })
      .catch(error => {
        console.error('Error deleting message:', error);
      });
  }

  return (
    <div>
      <AdminHeader />
      <section className='admin-review'>
        <div className="subheadings">
            <p>Orders</p>
        </div>
        <div className='list'>
          {ordersList.map((orderItem)=>{
            return (
              <AdminOrder
                  key={orderItem._id}
                  id={orderItem._id}
                  userName={orderItem.userName}
                  totalPrice={orderItem.totalPrice}
                  address={orderItem.address}
                  cardNumber={orderItem.cardNumber}
                  onDelete={deleteMessage}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default AdminOrders
