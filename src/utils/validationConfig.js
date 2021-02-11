//создаю объект со всеми нужными классами форм
//доделать валидацию, отображение сохранения и попап удаления
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSaveSelector: '.popup__button-save',
  inputInvalidClass: 'popup__input_invalid',
  buttonSaveDisabledClass: 'popup__button-save_type_disabled',
  spanSelector: '.popup__input-error'
};

export default validationConfig;
