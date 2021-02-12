import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onSubmit}) {
  const inputLink = React.useRef(null);

  function handleSubmit() {  
    onSubmit({
      avatar: inputLink.current.value,
    });
  } 

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Обновить аватар"
      name="edit-avatar"
      onClose ={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        className="popup__input popup__input_type_link"
        type="URL"
        name="link"
        id="avatar-link"
        placeholder="Ссылка на картинку"
        ref={inputLink}
        required
      />
      <span className="popup__input-error" id="avatar-link-error" />
  </PopupWithForm>
  )
}

export default EditAvatarPopup;