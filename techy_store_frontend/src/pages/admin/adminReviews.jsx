import React, {useState,useEffect} from 'react'
import AdminHeader from '../../components/adminheader'
import AdminReview from '../../components/adminReview';
//import reviews from '../../reviewdata.js';
import axios from 'axios';

const AdminReviews = () => {
  const [reviewsList, setReview] = useState([]);

  // function deleteReview(id) {
  //   setReview(reviewsList => {
  //       return reviewsList.filter((reviewItem, index) => {
  //         return index !== id;
  //       })
  // })};

  useEffect(() => {
    axios.get('https://techy-store-app-api.onrender.com/api/reviews/all')
      .then(response => {
        setReview(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  function deleteReview(id) {
    axios.delete(`https://techy-store-app-api.onrender.com/api/reviews/${id}`)
      .then(response => {
        setReview(prevReviews => prevReviews.filter(review => review._id !== id));
        alert("Review deleted successfully!")
      })
      .catch(error => {
        console.error('Error deleting review:', error);
      });
  }

  return (
    <div>
      <AdminHeader />
      <section className='admin-review'>
        <div className="subheadings">
            <p>Reviews</p>
        </div>
        <div className='list'>
          {reviewsList.map((reviewItem, index)=>{
            return(
              <AdminReview
                  key={index}
                  id={reviewItem._id}
                  name={reviewItem.name}
                  reviewBody={reviewItem.reviewBody}
                  onDelete={deleteReview}
               />
            )
          })}
        </div>
      </section>
    </div>

  )
}

export default AdminReviews
