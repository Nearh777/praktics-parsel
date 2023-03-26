export function createMarkup(array) {
  return array
    .map(item => {
      return `<li class="gallery__item">
    <img src="${item.urls.small}" alt="${item.alt_description}" class="gallery-img">
</li>`;
    })
    .join('');
}
