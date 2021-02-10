import React from 'react';
// import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import api from '../utils/api.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  // прокидываю данные для ImagePopup из Card через Main (onCardClick={})
  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  };

  function handleProfileSubmit(name, description) {
    api.updateUser({name, info: description})
      .then(() => {
        setCurrentUser({...currentUser, name, about: description});
        closeAllPopups();
      })
  }

  React.useEffect(() => {
    Promise.all([api.getUserInfo()]) 
      .then(([userInfo]) => {
        setCurrentUser(userInfo);
      })
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      {/* редактировать профиль */}
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onSubmit={handleProfileSubmit} />

      {/* редактировать аватар */}
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        title="Обновить аватар"
        name="edit-avatar"
        onClose ={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_link"
          type="URL"
          name="link"
          id="avatar-link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error" id="avatar-link-error" />
      </PopupWithForm>


      {/* добавить карточку */}
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        title="Новое место"
        name="add-card"
        onClose={closeAllPopups}
      >
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
        <span className="popup__input-error" id="card-title-error" />
        <input
          className="popup__input popup__input_type_link"
          type="URL"
          name="link"
          id="card-link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error" id="card-link-error" />
      </PopupWithForm>

        {/* попап картинки */}
      <ImagePopup 
        card={selectedCard}
        onClose ={closeAllPopups}
      />

      {/* удалить карточку */}
      <PopupWithForm />
    </CurrentUserContext.Provider>
  );
}

export default App;
