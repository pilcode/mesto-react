import React from 'react';

function ImagePopup({card, onClose}) {
  let openClass = '';
  if (card && card.link) openClass = ' popup_opened';
    
  return (
    <div className={`popup popup_type_image` + openClass}>
      <div className="popup__content popup__content_type_image">
        <figure className="popup__figure">
          <img className="popup__image" alt={card.name} src={card.link}/>
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
        <button type="button" className="popup__button-close" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;