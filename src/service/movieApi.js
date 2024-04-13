import axios from 'axios';

// const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '690c4ac99bda5f377bcd8832d75772df';

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}&language=en-US`);
  return response.data.results;
};