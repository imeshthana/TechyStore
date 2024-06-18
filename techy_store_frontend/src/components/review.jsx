import React from 'react'

const Review = (props) => {
  return (
    <div className="review-box">
        <img alt="img" src='quote.jpg' />
        <h3>{props.name}</h3>
        <p>{props.reviewBody}</p>
    </div>
  )
}

export default Review
