import React from 'react';
import defaultAvatar from '../images/loading-foto.png';
import api from '../utils/api.js';
import Card from './Card.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {
  const {about, avatar, name, _id} = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);
  // console.log(userContext);

  // const [userId, setUserId] = React.useState('');
  // const [userName, setUserName] = React.useState('');
  // const [userDescription, setUserDescription] = React.useState('');
  // const [userAvatar, setUserAvatar] = React.useState(cousteauPath);
  
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === _id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((element) => {
          return element !== card;
        });
        setCards(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    Promise.all([api.getInitialCards()]) 
      .then(([initialCards]) => {
        // setUserId(userInfo._id);
        // setUserName(userInfo.name);
        // setUserDescription(userInfo.about);
        // setUserAvatar(userInfo.avatar); 
        setCards(initialCards);
      })
  }, []);

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
          <Card card={card} key={card._id} currentUser={_id} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
        ))}
      </section>
    </main>
  );
}

export default Main;