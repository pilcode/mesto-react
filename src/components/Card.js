import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const {_id} = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === _id;
  const cardDeleteButtonClassName = isOwn 
    ?  (<button type="button" className="element__button-delete" onClick={handleDeleteClick} />)
    : null;

  const isLiked = card.likes.some(i => i._id === _id);
  const cardLikeButtonClassName = `element__button-like ${isLiked ? 'element__button-like_theme_dark' : ''}`;

  function handleClick() {
    onCardClick(card);
  };

  function handleLikeClick() {
    onCardLike(card);
  };

  function handleDeleteClick() {
    onCardDelete(card);
  };

  // onClick={handleDeleteClick}
  return (
    <article className="element">
      {cardDeleteButtonClassName}
      <div className="element__wrapper">
        <img className="element__image" alt={card.name} src={card.link} onClick={handleClick} />
      </div>
      <div className="element__panel">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-wrapper">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} />
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;