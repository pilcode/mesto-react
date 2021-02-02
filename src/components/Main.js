import React from 'react';
import cousteauPath from '../images/Jacques-Yves-Cousteau.jpg'


function Main({onEditProfile, onEditAvatar, onAddPlace}) {
  
  return (
    <main className="content">
      <section className="profile">
        <button type="button" className="profile__edit-avatar" onClick={onEditAvatar}>
          <img className="profile__avatar" src={cousteauPath} alt="Фотопортрет Жак-Ив Кусто"/>
        </button>

        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__about">Исследователь океана</p>
        </div>

        <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
      </section>

      <section className="elements" aria-label="Места, которыe стоит посетить"></section>
    </main>
  );
}

export default Main;