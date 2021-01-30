import React from 'react';
import cousteauPath from '../images/Jacques-Yves-Cousteau.jpg'


function Main() {

  // const [] = React.useState(0);

  function handleEditAvatarClick() {
    const editAvatar = document.querySelector('.popup_type_edit-avatar');
    editAvatar.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const editProfile = document.querySelector('.popup_type_edit');
    editProfile.classList.add('popup_opened');

  }

  function handleAddPlaceClick() {
    const addPlace = document.querySelector('.popup_type_add-card');
    addPlace.classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
      <button type="button" className="profile__edit-avatar" onClick={handleEditAvatarClick}>
        <img className="profile__avatar" src={cousteauPath} alt="Фотопортрет Жак-Ив Кусто"/>
      </button>

      <div className="profile__info">
        <div className="profile__info-wrapper">
        <h1 className="profile__name">Жак-Ив Кусто</h1>
        <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
        </div>
        <p className="profile__about">Исследователь океана</p>
      </div>

      <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="elements" aria-label="Места, которыe стоит посетить"></section>
    </main>
  );
}

export default Main;