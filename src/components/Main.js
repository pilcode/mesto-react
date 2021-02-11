import React from 'react';
import defaultAvatar from '../images/loading-foto.png';
// import api from '../utils/api.js';
import Card from './Card.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick, cards, onCardLike, onCardDelete}) {
  const {about, avatar, name, _id} = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <button type="button" className="profile__edit-avatar" onClick={onEditAvatar}>
          <img className="profile__avatar" src={avatar || defaultAvatar} alt={`Фотопортрет ${name}`} />
        </button>

        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__name">{name}</h1>
            <button type="button" className="profile__edit-button" onClick={onEditProfile} />
          </div>
          <p className="profile__about">{about}</p>
        </div>

        <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>

      <section className="elements" aria-label="Места, которыe стоит посетить">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            currentUser={_id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;