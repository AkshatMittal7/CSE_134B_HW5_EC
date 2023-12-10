import React, { useState } from 'react';

const RatingWidget = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = (ratingValue) => {
    setRating(ratingValue);
    console.log(`Rating submitted: ${ratingValue}`);
    displayMessage(ratingValue);
  };

  const displayMessage = (ratingValue) => {
    let message = '';
    if (ratingValue >= maxRating * 0.8) {
      message = `Thanks for the high rating of ${ratingValue} stars! We're glad you're happy.`;
    } else {
      message = `We're sorry to hear that you only rated us ${ratingValue} stars. We'll strive to do better.`;
    }
    setMessage(message);
  };

  return (
    <div>
      {[...Array(maxRating)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={index}
            className="rating-star"
            style={{ color: hoverRating >= ratingValue ? 'gold' : 'grey' }}
            onClick={() => handleSubmit(ratingValue)}
            onMouseEnter={() => setHoverRating(ratingValue)}
            onMouseLeave={() => setHoverRating(rating)}
          >
            &#9733;
          </span>
        );
      })}
      {message && <div>{message}</div>}
    </div>
  );
};

export default RatingWidget;

