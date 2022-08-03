import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeGenreAction } from '../../store/actions';
import { selectFilmGenres } from '../../store/select';
import GenreItem from '../genre/genre';

function GenresList(): JSX.Element {

  const activeGenre = useAppSelector((state) => state.genre);
  const genres = useAppSelector(selectFilmGenres);

  const dispatch = useAppDispatch();

  const onChangeGenreHandler = (genre: string) => {
    dispatch(changeGenreAction(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <GenreItem
          key={genre}
          genre={genre}
          activeGenre={activeGenre}
          onGenreClick={onChangeGenreHandler}
        />
      ))}
    </ul>
  );
}

export default GenresList;
