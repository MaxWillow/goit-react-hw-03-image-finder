import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '14260445-94202652c4e141397bd31e336';

export const fetchImages = (query, page = 1) => {
  const requestParams = `?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=`;
  return axios.get(BASE_URL + requestParams + KEY);
};

export const w = () => null;
