const form = document.querySelector('.js-contact-form');
const STORAGE_KEY = 'user-data-key';
form.addEventListener('input', handlerInput);
const userData = {};
function handlerInput (e){
  //console.log(e.target.value);
  
  userData[e.target.name] =e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  console.log(userData);
}; 

