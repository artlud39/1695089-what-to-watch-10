import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectActiveGenre, selectGenres } from '../../store/films-slice/select';
import { changeGenre } from '../../store/films-slice/films-slice';

import GenreItem from '../genre/genre';

function GenresList(): JSX.Element {

  const genres = useAppSelector(selectGenres);
  const activeGenre = useAppSelector(selectActiveGenre);

  const dispatch = useAppDispatch();

  const handleChangeGenre = (genre: string) => {
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
