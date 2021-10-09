export const renderLoading = (popupSelector, isAvailable) => {
  const popupElement = document.querySelector(popupSelector);
  const formElement = popupElement.querySelector('.popup__form');
  const buttonSubmitElement = formElement.querySelector('.popup__save-button');
  const buttonValue = buttonSubmitElement.textContent;

  if (isAvailable) {
    buttonSubmitElement.textContent = buttonValue;
    buttonSubmitElement.removeAttribute('disabled');
  } else {
    buttonSubmitElement.textContent = 'Сохранение...';
    buttonSubmitElement.setAttribute('disabled', true);
  }
};
