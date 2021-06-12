import { useEffect, useState } from "react"
import { useHistory } from "react-router";

import { getMovieImage, getMovies } from "../services/api"

import "../styles.css";

export function List() {
  const { push } = useHistory();

  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMovies()
      .then(response => setMovies(response.results))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [movies]);

  function handleGoToDetails(movieId) {
    push('details', { movieId });
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Falha ao buscar os dados do filme. Por favor, atualize a página ou tente mais tarde.</p>;
  }

  return (
    <div className="main_container">
      <h1 className="page_title">Filmes</h1>

      {movies.map(movie => (
        <div key={movie.id} className="movie_container" onClick={() => handleGoToDetails(movie.id)}>
          <img src={getMovieImage(movie.poster_path)} alt={movie.original_title} className="movie_cover" />
          <div className="movie_info">
            <strong className="movie_title">{movie.original_title}</strong>
            <p className="overview">{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  )
}