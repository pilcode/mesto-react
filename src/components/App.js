import React from 'react';
// import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  // прокидываю данные для ImagePopup из Card через Main (onCardClick={})
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
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
      <PopupWithForm 
        isOpen={isEditProfilePopupOpen}
        title="Редактировать профиль"
        name="edit"
        onClose ={closeAllPopups}
      >
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
        <span className="popup__input-error" id="profile-name-error" />
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
        <span className="popup__input-error" id="profile-info-error" />
      </PopupWithForm>

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
    </>
  );
}

export default App;
