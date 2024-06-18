import React,{useState, useEffect} from 'react'
import axios from 'axios';
import AdminHeader from '../../components/adminheader'
// import messages from '../../messagesData'
import AdminMessage from '../../components/adminMessage';


const AdminMeassages = () => {
  const [messagesList, setMessage] = useState([]);

  // function deleteMessage(id) {
  //   setMessage(messagesList => {
  //       return messagesList.filter((messageItem, index) => {
  //           return index !== id;
  //       })
  //   });
  // }

  useEffect(() => {
    axios.get('https://techy-store-app-api.onrender.com/api/messages/all')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  function deleteMessage(id) {
    axios.delete(`https://techy-store-app-api.onrender.com/api/messages/${id}`)
      .then(response => {
        setMessage(prevMessages => prevMessages.filter(message => message._id !== id));
        alert("Message deleted successfully!")
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
            <p>Messages</p>
        </div>
        <div className='list'>
          {messagesList.map((messageItem)=>{
            return (
              <AdminMessage
                  key={messageItem._id}
                  id={messageItem._id}
                  name={messageItem.name}
                  subject={messageItem.subject}
                  messageBody={messageItem.messageBody}
                  onDelete={deleteMessage}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default AdminMeassages
