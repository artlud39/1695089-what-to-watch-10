import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { selectActiveGenre, selectGenres } from '../../store/films-slice/select';
import { changeGenre } from '../../store/films-slice/films-slice';

import GenreItem from '../genre-item/genre-item';

function GenresList(): JSX.Element {

  const genres = useAppSelector(selectGenres);
  const activeGenre = useAppSelector(selectActiveGenre);

  const dispatch = useAppDispatch();

  const handleChangeGenre = (genre: string): void => {
    dispatch(changeGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <GenreItem
          key={genre}
          genre={genre}
          activeGenre={activeGenre}
          onGenreClick={handleChangeGenre}
        />
      ))}
    </ul>
  );
}

export default GenresList;
