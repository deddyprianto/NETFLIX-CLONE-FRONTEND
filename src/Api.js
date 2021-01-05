export const api_key = "f797e2cf0bb90660383d12fa045c15e6";

export const dbRequURL = {
  fetchNetflixOriginals: `/discover/movie?api_key=${api_key}&with_networks`,
  fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchTopRated: `movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionsMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10769`,
  fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
};
