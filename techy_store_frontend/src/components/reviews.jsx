import React,{useState,useEffect} from 'react'
import Review from './review';
// import reviews from '../reviewdata';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from 'axios';


const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: '-20px',
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  padding:"1rem",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "-20px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  padding:"1rem",
};

const NextArrow = (props) => {
  const { onClick } = props
  return (
    <div onClick={onClick} style={leftArrowStyles}>
          ❰
    </div>
  )
}

const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <div onClick={onClick} style={rightArrowStyles}>
      ❱
    </div>
  )
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

const Reviews = (props) => {
  const [review, setReview] = useState({
    name:'',
    reviewBody:''
  })
  const [reviewsList, setReviews] = useState([]);

  function handleChange(event) {
    const {name,value} = event.target;
    setReview(prevReview => {
      return{...prevReview, [name]: value};
    });
  }

  // function sendReview(event){
  //       reviews.push(review);
  //       event.preventDefault();
  //       setReview({
  //           review:''
  //       })
  //   }

  useEffect(() => {
    axios
      .get('https://techy-store-app-api.onrender.com/api/reviews/all')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  function sendReview(event) {
    axios
        .post("https://techy-store-app-api.onrender.com/api/reviews/", review)
        .then((result) => {
            console.log(result);
            setReview({name:'' , reviewBody:''});
            alert('Review sent successfully!'); 
        })
        .catch((error) => {
            console.error('Error during review sending:', error);
            alert('Failed to send review'); 
        });
  }

  return (
    <section id="reviews">
        <div className="items">
            <div className="subheadings">
                <p>Customer Reviews</p>
            </div>
            <div className="r-box-container">
            <Slider {...settings}>
                {reviewsList.map((reviewItem, index)=>{
                  return (
                    <Review
                      name={reviewItem.name}
                      reviewBody={reviewItem.reviewBody}
                    />
                  )
                })}
            </Slider>
            </div>
        </div>
        <div className="r-subheading">
                <p>Review Us</p>
            </div>
        <div className='review-row'>
            <input onChange={handleChange} name="name" value={review.name} className='write-review' placeholder='Name'/>
            <input onChange={handleChange} name="reviewBody" value={review.reviewBody} className='write-review' placeholder='Your Review...'/>
            <button onClick={sendReview} type="submit" class="btn"> Review <i class="fas fa-paper-plane"></i></button>
        </div>
    </section>
  )
}

export default Reviews
