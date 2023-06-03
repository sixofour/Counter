import {inputsGroupSubmit, inputGroupReset, submitHandler, clearInput} from './buttons.js'

const buttonCalculateElement = document.querySelector(".form__submit-button");
const resetButtonElement = document.querySelector(".form__reset-button");
const inputsGroupElement = document.querySelector(".inputs-group");

inputsGroupElement.addEventListener("change", inputsGroupSubmit);
inputsGroupElement.addEventListener("change", inputGroupReset);
buttonCalculateElement.addEventListener("click", submitHandler);
resetButtonElement.addEventListener("click", clearInput);
