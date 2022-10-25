import { useEffect, useState } from "react";
import { Card, CardContent, Loading, ButtonFav, Main } from "./styles";
import { useFavorites } from "../../hooks/FavoriteContext";
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt-br");

export function Cards({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(movie));
  }, [movie, isFavorite]);

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(movie);
      setFavorite(false);
    } else {
      addFavorite(movie);
      setFavorite(true);
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  function type(movie) {
    let typeData = "";
    if (movie.media_type === "movie") {
      return "Filme";
    } else if (movie.media_type === "tv") {
      return "Tv Series";
    }
    return typeData;
  }

  function formatDate(movie) {
    let data = "";
    if (movie.release_date !== undefined) {
      data = moment(movie.release_date).format("YYYY");
    } else if (movie.first_air_date !== undefined) {
      data = moment(movie.first_air_date).format("YYYY");
    }
    return data;
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
 
      <Main>
      {isLoading ? (
        <Card>
          <Loading />
        </Card>
      ) : (
        <Card style={{ width: '200px', marginLeft: '1rem' }}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.name}
        />
        <CardContent>
          <div>
            <h2>{movie.title}</h2>
            <h2>{movie.name}</h2>
          </div>
          <article>
            {movie.media_type ? type(movie) : formatDate(movie)}
            <span>
              <FaStar />
              {movie.vote_average.toFixed(1)}
            </span>
          </article>
          <p>{movie.overview.slice(0, 100) + '...'}</p>
        </CardContent>
        </Card>
      )}
      <ButtonFav onClick={handleFavorite}>{favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}</ButtonFav>
      </Main>
  
  );
}
