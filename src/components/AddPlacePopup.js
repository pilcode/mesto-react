import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onSubmit}) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    if (isOpen) {
      setName('');
      setLink('');
    }
  }, [isOpen])

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlelinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit() {
    onSubmit(name, link);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Новое место"
      name="add-card"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_title"
        type="text"
        name="title"
        id="card-title"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={name || ''}
        onChange={handleNameChange}
        required
      />
      <span className="popup__input-error" id="card-title-error" />
      <input
        className="popup__input popup__input_type_link"
        type="URL"
        name="link"
        id="card-link"
        placeholder="Ссылка на картинку"
        value={link || ''}
        onChange={handlelinkChange}
        required
      />
      <span className="popup__input-error" id="card-link-error" />
    </PopupWithForm>
  )
}

export default AddPlacePopup;
