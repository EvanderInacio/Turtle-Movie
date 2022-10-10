import { useFavorites } from "../../hooks/FavoriteContext";
import { Cards } from "../../components/Card";
import * as S from "./styles";

export const Favorites = () => {
  const { favorites } = useFavorites();

  console.log(favorites);

  return (
    <S.Container>
      {favorites.length > 0 ? (
        favorites.map((movie) => <Cards movie={movie} />)
      ) : (
        <span>
          <h1>Lista de favoritos vazia</h1>
        </span>
      )}
    </S.Container>
  );
};
