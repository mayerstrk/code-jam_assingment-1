const form = document.querySelector(".form");
const contactButton = form.querySelector(".form__button");
const contactInput = form.querySelector(".form__input")

const handleFormSubmit = (evt) => {
  evt.preventDefault();
  contactButton.classList.add("form__button_click")
}

const hasInvalidInput = (inputElement) => {
    return !inputElement.validity.valid;
};

const disableButton = (button, config) => {
  button.disabled = true;
  button.classList.add("form__button_inactive");
};

const enableButton = (button, config) => {
  button.disabled = false;
  button.classList.remove("form__button_inactive");
};

const toggleButtonState = (inputElement, buttonElement,) => {
  if (hasInvalidInput(inputElement)) {
    disableButton(buttonElement);
  } else {
    enableButton(buttonElement);
  }
};


function enableValidation(inputElement, buttonElement) {
  toggleButtonState(inputElement, buttonElement);
  inputElement.addEventListener("input", () => {
    toggleButtonState(inputElement, buttonElement);
  });

};

enableValidation(contactInput, contactButton)

contactButton.addEventListener("click", handleFormSubmit);



