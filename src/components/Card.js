import React from 'react';

function Card({card, currentUser}) {
  return (
    <article className="element">
      <button type="button" className="element__button-delete"></button>
      <div className="element__wrapper">
        <img className="element__image" alt={card.name} src={card.link}/>
      </div>
      <div className="element__panel">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-wrapper">
          <button type="button" className="element__button-like"></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;