import axios from 'axios';

export async function getAllImages(message, page, perPage) {
  const baseURL = 'https://pixabay.com/api/';

  const params = {
    key: '49126238-069e1a94ee3ccc35c34a34de0',
    q: message,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  };
  const result = await axios.get(baseURL, { params });

  return result.data;
}
