const searceFormEl = document.querySelector('.js-search-form');
const loadMoreBtnEl = document.querySelector('.js-more');
const listEl = document.querySelector('.js-gallery');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { searchData } from './service/api';

import { createMarkup } from './createMarkup';

let page = 1;

let searchValue = '';

let hasMorePhotos = false;

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};
const callback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      console.log(entry.target);
      page += 1;
      searchData(searchValue, page).then(({ results, total }) => {
        const markup = createMarkup(results);
        listEl.insertAdjacentHTML('beforeend', markup);
        hasMorePhotos = page < Math.ceil(total / 21);
        if (hasMorePhotos) {
          const lastItem = document.querySelector('.gallery__item:last-child');
          observer.observe(lastItem);
        }
      });
      console.log(page);
    }
  });
};
const observer = new IntersectionObserver(callback, options);

searceFormEl.addEventListener('submit', hendleLoadPhoto);

function hendleLoadPhoto(e) {
  e.preventDefault();
  searchValue = searceFormEl.elements.query.value.trim();
  page = 1;
  listEl.innerHTML = '';
  if (!searchValue) {
    return Notify.failure('Введыть валідні данні в пошуку!');
  }
  searchData(searchValue, page).then(({ results, total }) => {
    const markup = createMarkup(results);
    listEl.insertAdjacentHTML('beforeend', markup);
    hasMorePhotos = page < Math.ceil(total / 21);
    if (hasMorePhotos) {
      const lastItem = document.querySelector('.gallery__item:last-child');
      observer.observe(lastItem);
    }
  });
}
