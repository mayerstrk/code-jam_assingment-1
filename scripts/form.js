const form = document.querySelector(".form");
const contactButton = form.querySelector(".form__button");
const contactInput = form.querySelector(".form__input")

const handleFormSubmit = (evt) => {
  evt.preventDefault();
  //prevents user from submitting more than once;
  disableButton(contactButton)
  contactButton.classList.add("form__button_state_checked");
  // contactInpit.disabled = true;
}

const hasInvalidInput = (inputElement) => {
    return !inputElement.validity.valid;
};

const disableButton = (button) => {
  button.disabled = true;
  button.classList.add("form__button_state_inactive");
};

const enableButton = (button) => {
  button.disabled = false;
  button.classList.remove("form__button_state_inactive");
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



