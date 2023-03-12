import storageApi from './storage.js';

const form = document.querySelector('.js-contact-form');
const STORAGE_KEY = 'user-data-key';
initPage();
form.addEventListener('input', handlerInput);

function handlerInput(e) {
  const savedData = storageApi.load(STORAGE_KEY) || {};
  savedData[e.target.name] = e.target.value;
  storageApi.save(STORAGE_KEY, savedData)
}

function initPage() {
  const savedData = storageApi.load(STORAGE_KEY);
  if (savedData) {
    Object.entries(savedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}

function handlerSaveData(e) {
  e.preventDefault();
  const userData = {};
  const formData = new FormData(form);
  formData.forEach((value, name) => userData[name] = value);
  console.log(userData);
  storageApi.remove(STORAGE_KEY);
  e.target.reset();
}

form.addEventListener('submit', handlerSaveData);