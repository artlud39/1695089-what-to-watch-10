import Film from '../film/film';
import { FilmsType } from '../../types/films';
import { useState } from 'react';

type FilmsListProps = {
  films: FilmsType[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {

  const [filmActiveId, setFilmActiveId] = useState<string | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <Film
          isFilmActive={film.id === filmActiveId}
          setFilmActive={setFilmActiveId}
          picture={film.picture}
          title={film.title}
          key={film.id}
          id={film.id}
          video={film.video}
          poster={film.poster}
        />
      ))}
    </div>
  );
}

export default FilmsList;
