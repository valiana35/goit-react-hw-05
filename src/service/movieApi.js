import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '690c4ac99bda5f377bcd8832d75772df';
axios.defaults.params = {
  headers: {
  accept: 'application/json',
  Authorization:
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTBjNGFjOTliZGE1ZjM3N2JjZDg4MzJkNzU3NzJkZiIsInN1YiI6IjY2MWFhNzVjNWZmMzRlMDE0OTU4YzQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lUfo_KUYgrsjKYlX9JQnM1WgZ8is_yPoiH3o4HqPahI'
}}

export const getTrending = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}&language=en-US`);
  return data;
};

export const fetchMovie = async (movie_id) => {
  const { data } = await axios.get(`movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
  return data;
}

export const getMovie = async (query) => {
  const { data } = await axios.get(`search/movie?query=${query}&include_adult=false&api_key=${API_KEY}&language=en-US`);
  return data;
}

export const getMovieCredits = async (movie_id) => {
  const { data } = await axios.get(`movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`);
  return data;
}

export const getMovieReviews = async (movie_id) => {
  const { data } = await axios.get(`movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US`);
  return data;
}











