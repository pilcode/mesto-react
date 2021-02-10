import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function EditProfilePopup({isOpen, onClose, onSubmit}) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit() {
    onSubmit(name, description)
  }

  return (
    <PopupWithForm 
      isOpen={isOpen}
      title="Редактировать профиль"
      name="edit"
      onClose ={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_name"
        type="text"
        name="name"
        value={name || ''}
        id="profile-name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        onChange={handleNameChange}
        required
      />

      <span className="popup__input-error" id="profile-name-error" />
      <input
        className="popup__input popup__input_type_about" 
        type="text"
        name="info"
        value={description || ''}
        id="profile-info"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        onChange={handleAboutChange}
        required
      />
      <span className="popup__input-error" id="profile-info-error" />
    </PopupWithForm>
  )
}

export default EditProfilePopup;
