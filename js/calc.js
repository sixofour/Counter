const CALORIES_FACTOR = 15;

const ageInput = document.querySelector('#age');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');

const genderMale = document.querySelector('#gender-male');
const genderFemale = document.querySelector('#gender-female');

const caloriesNorm = document.querySelector('#calories-norm');
const caloriesMin = document.querySelector('#calories-minimal');
const caloriesMax = document.querySelector('#calories-maximal');

const activityRate = {
    minimum: 1.2,
    low: 1.375,
    medium: 1.55,
    high: 1.725,
    max: 1.9
}

const genderChoise = function() {
    if (genderMale.checked){
        return "male";
    } else if (genderFemale){
        return "fem";
    }
}

const physAc = function() {
    let rate = document.querySelector('input[name="activity"]:checked').value;
    switch(rate) {
        case 'min':
            return activityRate.minimum;
            break;
        case 'low':
            return activityRate.low;
            break;
        case 'medium':
            return activityRate.medium;
            break;
        case 'high':
            return activityRate.high;
            break;
        case 'max':
            return activityRate.max;
            break;
    }
}

const calCount = function() {
    let norm = 3800;
    if(genderChoise() === 'male'){
        norm = (10 * Number(weightInput.value)) + (6.25 * Number(heightInput.value)) - (5 * Number(ageInput.value)) + 5;
        norm *= physAc();
    } else {
        norm = ((10 * Number(weightInput.value)) + (6.25 * Number(heightInput.value)) - (5 * Number(ageInput.value)) - 161).toFixed();
        norm *= physAc();
    };
    caloriesNorm.textContent = norm.toFixed();
    caloriesMin.textContent = (norm -= (norm/100)*CALORIES_FACTOR).toFixed();
    caloriesMax.textContent = (norm += (norm/100)*CALORIES_FACTOR).toFixed();
}

export {ageInput, heightInput, weightInput, genderMale, calCount}