import React from 'react';
// import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import api from '../utils/api.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});


  React.useEffect(() => {
    Promise.all([api.getUserInfo()]) 
      .then(([userInfo]) => {
        setCurrentUser(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

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
      .catch((error) => {
        console.log(error);
      });
  }

  function handleAvatarSubmit({avatar}) {
    api.updateAvatar({link: avatar})
      .then(() => {
        setCurrentUser({...currentUser, avatar});
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  } 

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
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onSubmit={handleAvatarSubmit} />

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
