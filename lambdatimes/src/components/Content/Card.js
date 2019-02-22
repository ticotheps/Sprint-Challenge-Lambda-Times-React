import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  console.log(props.card);
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt={props.card.headline} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({ 
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}

// Make sure to include PropTypes.

export default Card;
