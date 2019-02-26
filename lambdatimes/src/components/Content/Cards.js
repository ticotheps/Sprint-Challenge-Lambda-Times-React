import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  // console.log(props.cards);
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((card, index) => (
        <Card key={index} card={card}/>
      ))}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({ 
      headline: PropTypes.string,
      tab: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string
    })
  )
}
// Make sure you include prop types for all of your incoming props

export default Cards;