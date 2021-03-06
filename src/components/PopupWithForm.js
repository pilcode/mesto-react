import React from 'react';

function PopupWithForm({children, title, name, isOpen, onClose, onSubmit, buttonText}) {
  let openClass = '';
  if (isOpen) openClass = ' popup_opened';

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  };
  
  return (
    <div className={`popup popup_type_${name}` + openClass}>
      <div className="popup__content">
        <h3 className="popup__title">{`${title}`}</h3>
        <form className={`popup__form popup__form_type_${name}`} name={`${name}`} onSubmit={handleSubmit}>
          {children}
          <button type="submit" className="popup__button-save">{buttonText}</button>
        </form>
        <button type="button" className="popup__button-close" onClick={onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;