import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onSubmit}) {
  // const [value, setValue] = React.useState('');
  const inputLink = React.useRef(null);

  // let textInput = null;

  // function handleClick() {
  //   inputLink.focus();
  // }

  // function handleLinkChange(e) {
  //   setValue(e.target.value);
  // }

  function handleSubmit() {
    // e.preventDefault();
  
    onSubmit({
      avatar: inputLink.current.value,
      
    });
    // console.log(onSubmit)
  } 

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Обновить аватар"
      name="edit-avatar"
      onClose ={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_link"
        type="URL"
        name="link"
        // value={value}
        // value="Focus the text input"
        id="avatar-link"
        placeholder="Ссылка на картинку"
        // onChange={handleLinkChange}
        // ref={(value) => {inputLink = value}}
        ref={inputLink}
        required
      />
      <span className="popup__input-error" id="avatar-link-error" />
  </PopupWithForm>
  )
}

export default EditAvatarPopup;