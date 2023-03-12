const form = document.querySelector('.js-contact-form');
const STORAGE_KEY = 'user-data-key';
initPage();
form.addEventListener('input', handlerInput);

function handlerInput(e) {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  savedData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
}

function initPage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedData);
  if (savedData) {
    Object.entries(savedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
