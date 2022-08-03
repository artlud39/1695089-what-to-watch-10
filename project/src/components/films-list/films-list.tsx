import Film from '../film/film';
import { useState } from 'react';
import { FilmsType } from '../../types/films';
import { useAppSelector } from '../../hooks';
import { getActiveGenre } from '../../store/select';

type FilmsListType = {
  films: FilmsType,
}

function FilmsList({films}: FilmsListType): JSX.Element {

  const [filmActiveId, setFilmActiveId] = useState<number | null>(null);

  const activeGenre = useAppSelector(getActiveGenre);
  const filterFilms = (activeGenre === 'All Genres') ? films : films.filter((film) => film.genre === activeGenre);

  return (
    <div className="catalog__films-list">
      {filterFilms.map((film) => (
        <Film
          isFilmActive={film.id === filmActiveId}
          setFilmActive={setFilmActiveId}
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

export default FilmsList;
