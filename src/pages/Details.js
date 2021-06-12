import { useEffect, useState } from "react";
import { useHistory } from "react-router"

import { getMovieDetails, getMovieImage } from "../services/api";

import "../styles.css";
import { formatDate } from "../utils/formatDate";

export function Details() {
  const { goBack, location } = useHistory();
  const { movieId } = location.state;

  const [movie, setMovie] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(response => setMovie(response))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [movieId]);

  function handleGoBack(event) {
    event.preventDefault();
    goBack();
  }
  
  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Falha ao buscar os dados do filme. Por favor, atualize a página ou tente mais tarde.</p>;
  }

  return (
    <div className="details_container">
      <img src={getMovieImage(movie.poster_path)} alt={movie.original_title} className="details_movie_cover" />
      <div className="movie_info">
        <strong className="movie_title">{movie.original_title}</strong>
        <small className="details_genres">
          {movie.genres.map(genre => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </small>
        <p className="details_release_date">Release date: {formatDate(movie.release_date)}</p>
        
        <p className="overview">{movie.overview}</p>

        <a href="/" target="_blank" rel="noreferrer" onClick={handleGoBack}>Go back</a>
      </div>
    </div>
  )
}