export function getMovies() {
  return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .catch(() => { throw new Error() });
}

export function getMovieDetails(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .catch(() => { throw new Error() });
}

export function getMovieImage(posterPath) {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
}