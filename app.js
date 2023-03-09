let named = document.getElementById('name')
let card = document.getElementById('card-top')

function CardUpdate () {
  if (named.value != ""){
    card.innerText = named.innerText
  }

}

function showError(errorElement, errorMessage){
  document.querySelector("."+errorElement).classList.add("display-error");
  document.querySelector("."+errorElement).innerHTML = errorMessage;
}

function clearError(){
  let errors = document.querySelectorAll(".error");
  for (let error of errors) {
    error.classList.remove("display-error");
  }
}

let form = document.getElementById('form')
let hidden = document.getElementById("completed-form")

form.onsubmit = function (event) {
  clearError();
  const cardNumberValue = cnumber.value.replace(/\s/g, '');
  if(form.name.value === ""){
    showError("name-error", "You have to enter your name");
    return false;
  }
  if(cardNumberValue === ""){
    showError("number-error", "Can't be blank");
    return false;
  } 
  if(!/^\d{16}$/.test(cardNumberValue)){
    showError("number-error", "Card number is too short");
    return false;
  }
  if(form.exdate.value === ""){
    showError("date-error", "Can't be blank");
    return false;
  }
  if(form.myear.value === ""){
    showError("year-error", "Can't be blank");
    return false;
  }
  if(form.cvc.value === ""){
    showError("cvc-error", "Can't be blank");
    return false;
  }
  hidden.style.display = "flex";
  form.style.display = "none";
  event.preventDefault();
}

const nameInput = document.getElementById('name');
const creditName = document.getElementById('card-left'); /*code for individual's name*/
const numberInput = document.getElementById('cnumber');
const creditNumber = document.getElementById('card-top'); /*code for credit card number*/
const monthInput = document.getElementById('exdate');
const creditMonth = document.getElementById('card-right-one'); /* card expiration month */
const yearInput = document.getElementById('myear');
const creditYear = document.getElementById('card-right-two'); /* card expiration year */
const cvcInput = document.getElementById('cvc'); 
const creditCvc = document.getElementById('back-bottom'); /*card cvc*/

cnumber.addEventListener('input', () => {
  const input = cnumber.value.replace(/\s/g, ''); // Remove any existing spaces
  const formattedInput = input.replace(/(\d{4})(?=\d)/g, '$1 '); // Add space after every 4 digits
  cnumber.value = formattedInput.substr(0, 19); // Limit to 19 characters (16 digits and 3 spaces)
  creditNumber.innerText = cnumber.value;
});

nameInput.addEventListener('change', () => {
    creditName.innerHTML = nameInput.value;
});

/* numberInput.addEventListener('change', () => {
  creditNumber.innerHTML = numberInput.value;
}); */

monthInput.addEventListener('change', () => {
  creditMonth.innerHTML = monthInput.value;
});

yearInput.addEventListener('change', () => {
  creditYear.innerHTML = yearInput.value;
});

cvcInput.addEventListener('change', () => {
  creditCvc.innerHTML = cvcInput.value;
});