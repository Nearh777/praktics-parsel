const searceFormEl = document.querySelector('.js-search-form');
const loadMoreBtnEl = document.querySelector('.js-more');
const listEl = document.querySelector('.js-gallery');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

searceFormEl.addEventListener('submit', hendleLoadPhoto)

function hendleLoadPhoto(e) {
    e.preventDefault();
    const searchValue = searceFormEl.elements.query.value.trim();
    if (!searchValue) {
        return Notify.failure('Введыть валідні данні в пошуку!')
    }

}

