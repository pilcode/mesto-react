import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card({card, currentUser, onCardClick}) {
  const {_id} = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === _id;
  console.log(isOwn);
  const cardDeleteButtonClassName = isOwn 
    ?  (<button type="button" className="element__button-delete" />)
    : null;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      {cardDeleteButtonClassName}
      <div className="element__wrapper">
        <img className="element__image" alt={card.name} src={card.link} onClick={handleClick} />
      </div>
      <div className="element__panel">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-wrapper">
          <button type="button" className="element__button-like" />
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;