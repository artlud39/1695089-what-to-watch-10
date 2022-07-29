import { Genre } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeGenreAction } from '../../store/action';
import { State } from '../../types/state';
import GenreItem from '../genre/genre';

const GenreList = [
  'AllGenres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

const getActiveGenre = (state: State) => state.genre;

function GenresList(): JSX.Element {
  const activeGenre = useAppSelector(getActiveGenre);
  const dispatch = useAppDispatch();

  const handleGenreClick = (genre: Genre) => {
    dispatch(changeGenreAction(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {GenreList.map((genre, index) => (
        <GenreItem
          key={genre}
          genre={Object.values(Genre)[index]}
          activeGenre={activeGenre}
          handleGenreClick={handleGenreClick}
        />
      ))}
    </ul>
  );
}

export default GenresList;
