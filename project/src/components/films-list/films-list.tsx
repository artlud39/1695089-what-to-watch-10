import Film from '../film/film';
import { useEffect, useState } from 'react';
import { FilmsType } from '../../types/films';
import { useAppSelector } from '../../hooks';
import { getActiveGenre } from '../../store/select';
import ShowMoreButton from '../show-more-button/show-more-button';
import { Gerne, SHOW_FILMS_STEP } from '../../const';

type FilmsListProps = {
  films: FilmsType,
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [filmActiveId, setFilmActiveId] = useState<number | null>(null);

  const [showCount, setShowCount] = useState<number>(SHOW_FILMS_STEP);

  const activeGenre = useAppSelector(getActiveGenre);
  const filterFilms = (activeGenre === Gerne.AllGeneres) ? films : films.filter((film) => film.genre === activeGenre);

  const renderFilms = filterFilms.slice(0, showCount);

  const onShowMoreBtnClick = () => {
    setShowCount(showCount + SHOW_FILMS_STEP);
  };

  const isShowButton = filterFilms.length >= showCount;

  useEffect(() => () => setShowCount(SHOW_FILMS_STEP) , [activeGenre]);

  return (
    <>
      <div className="catalog__films-list">
        {renderFilms.map((film) => (
          <Film
            isFilmActive={film.id === filmActiveId}
            setFilmActive={setFilmActiveId}
            key={film.id}
            film={film}
          />
        ))}
      </div>
      {isShowButton &&
      <ShowMoreButton onClick={onShowMoreBtnClick} />}
    </>
  );
}

export default FilmsList;
