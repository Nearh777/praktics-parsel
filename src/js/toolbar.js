const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}

const input = document.querySelector('.theme-switch__toggle');

input.addEventListener('change', onThemeTogle);

function onThemeTogle(e){
console.log(e.target.checked);
};