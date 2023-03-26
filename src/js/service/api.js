export function searchData(query, page) {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc&per_page=21&color=black_and_white&orientation=landscape`;

  return fetch(url).then(responce => {
    if (!responce.ok) {
      throw new Error('error, try again latter');
    }
    return responce.json();
  });
}
