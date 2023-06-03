import {ageInput, heightInput, weightInput, genderMale, calCount} from './calc.js'

const activityMin = document.querySelector('#activity-minimal');
const resultCounter = document.querySelector('.counter__result');
const resetButton = document.querySelector("[name='reset']");
const submitButton = document.querySelector("[name='submit']");

const isFilled = () => {
    return ageInput.value && heightInput.value && weightInput.value;
}
const inputsGroupSubmit = function (evt) {
    if (evt.target.nodeName === "INPUT" && isFilled()) {
        submitButton.disabled = false;
    }
}

const inputGroupReset = function (evt) {
    if (evt.target.nodeName === "INPUT") {
        resetButton.disabled = false;
    }
}
const submitHandler = (evt) => {
    evt.preventDefault();
    calCount();
    resultCounter.classList.remove('counter__result--hidden');
}

const clearInput = () => {
    ageInput.value = '';
    heightInput.value = '';
    weightInput.value = '';
    resetButton.disabled = true;
    submitButton.disabled = true;
    genderMale.checked = true;
    activityMin.checked = true;
    resultCounter.classList.add('counter__result--hidden');
}

export {inputsGroupSubmit, inputGroupReset, submitHandler, clearInput}