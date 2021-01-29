import React from 'react';
// import './App.css';
import logoPath from './images/logo.svg';
import cousteauPath from './images/Jacques-Yves-Cousteau.jpg'

function App() {
  return (
    <>
      <div className="page">
        <header className="header">
          <img className="logo " src={logoPath} alt="Логотип проекта Место"/>
        </header>

        <main className="content">
          <section className="profile">
            <button type="button" className="profile__edit-avatar">
              <img className="profile__avatar" src={cousteauPath} alt="Фотопортрет Жак-Ив Кусто"/>
            </button>

            <div className="profile__info">
              <div className="profile__info-wrapper">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button type="button" className="profile__edit-button"></button>
              </div>
              <p className="profile__about">Исследователь океана</p>
            </div>

            <button type="button" className="profile__add-button"></button>
          </section>

          <section className="elements" aria-label="Места, которыe стоит посетить"></section>
        </main>

        <footer className="footer">
          <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>
      </div>

      <div className="popup popup_type_edit">
        <div className="popup__content">
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form popup__form_type_edit" name="edit-profile">
            <input
              className="popup__input popup__input_type_name"
              type="text"
              name="name"
              id="profile-name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error" id="profile-name-error"></span>
            <input
              className="popup__input popup__input_type_about" 
              type="text"
              name="info"
              id="profile-info"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error" id="profile-info-error"></span>
            <button type="submit" className="popup__button-save">Сохранить</button>
          </form>
          <button type="button" className="popup__button-close"></button>
        </div>
      </div>

      <div className="popup popup_type_edit-avatar">
        <div className="popup__content">
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form popup__form_type_edit-avatar" name="edit-avatar">
            <input
              className="popup__input popup__input_type_link"
              type="URL"
              name="link"
              id="avatar-link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error" id="avatar-link-error"></span>
            <button type="submit" className="popup__button-save">Сохранить</button>
          </form>
          <button type="button" className="popup__button-close"></button>
        </div>
      </div>
    
      <div className="popup popup_type_add-card">
        <div className="popup__content">
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form popup__form_type_add" name="add-card">
            <input
              className="popup__input popup__input_type_title"
              type="text"
              name="title"
              id="card-title"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error" id="card-title-error"></span>
            <input
              className="popup__input popup__input_type_link"
              type="URL"
              name="link"
              id="card-link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error" id="card-link-error"></span>
            <button type="submit" className="popup__button-save">Создать</button>
          </form>
          <button type="button" className="popup__button-close"></button>
        </div>
      </div>

      <div className="popup popup_type_delet-card">
        <div className="popup__content popup__content_size_one">
          <h3 className="popup__title">Вы уверены?</h3>
          <button type="submit" className="popup__button-save">Да</button>
          <button type="button" className="popup__button-close"></button>
        </div>
      </div>
    
      <div className="popup popup_type_image">
        <div className="popup__content popup__content_type_image">
          <figure className="popup__figure">
            <img className="popup__image" alt="#" src="#"/>
            <figcaption className="popup__caption"></figcaption>
          </figure>
          <button type="button" className="popup__button-close"></button>
        </div>
      </div>
    
      <template id="card">
        <article className="element">
          <button type="button" className="element__button-delete"></button>
          <div className="element__wrapper">
            <img className="element__image" alt="#" src="#"/>
          </div>
          <div className="element__panel">
            <h2 className="element__title">1123124</h2>
            <div className="element__like-wrapper">
              <button type="button" className="element__button-like"></button>
              <p className="element__like-counter">0</p>
            </div>
          </div>
        </article>
      </template>
    </>
  );
}

export default App;
