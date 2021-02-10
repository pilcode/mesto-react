import React from 'react';
import defaultAvatar from '../images/loading-foto.png';
import api from '../utils/api.js';
import Card from './Card.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {
  const {about, avatar, name, _id} = React.useContext(CurrentUserContext);
  // console.log(userContext);

  // const [userId, setUserId] = React.useState('');
  // const [userName, setUserName] = React.useState('');
  // const [userDescription, setUserDescription] = React.useState('');
  // const [userAvatar, setUserAvatar] = React.useState(cousteauPath);
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]) 
      .then(([userInfo, initialCards]) => {
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
          {/* src={userAvatar} alt={`Фотопортрет ${userName}`} */}
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
          <Card card={card} key={card._id} currentUser={_id} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;