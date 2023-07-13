import React from 'react';

function renderRating(value, higherComparison, lowerComparison, color) {
  return (
    <i
      style={color}
      className={
        value >= higherComparison
          ? 'fas fa-star'
          : value >= lowerComparison
          ? 'fas fa-star-half-alt'
          : 'far fa-star'
      }
    ></i>
  );
}

function Rating({ value, text, color }) {
  return (
    <div className='rating'>
      <span>{renderRating(value, 1, 0.5, color)}</span>
      <span>{renderRating(value, 2, 1.5, color)}</span>
      <span>{renderRating(value, 3, 2.5, color)}</span>
      <span>{renderRating(value, 4, 3.5, color)}</span>
      <span>{renderRating(value, 5, 4.5, color)}</span>
      <span>{text && text}</span>
    </div>
  );
}

export default Rating;
