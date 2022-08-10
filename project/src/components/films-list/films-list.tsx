import Film from '../film/film';
import { useState } from 'react';
import { FilmsType } from '../../types/films';
import { useAppSelector } from '../../hooks';
import { getActiveGenre} from '../../store/select';
import ShowMoreButton from '../show-more-button/show-more-button';
import { SHOW_FILMS_STEP } from '../../const';

type FilmsListType = {
  films: FilmsType,
}

function FilmsList({films}: FilmsListType): JSX.Element {
  const [filmActiveId, setFilmActiveId] = useState<number | null>(null);

  const [showCount, setShowCount] = useState<number>(SHOW_FILMS_STEP);

  const activeGenre = useAppSelector(getActiveGenre);
  const filterFilms = (activeGenre === 'All Genres') ? films : films.filter((film) => film.genre === activeGenre);

  const renderFilms = filterFilms.slice(0, showCount);

  const onShowMoreBtnClick = () => {
    setShowCount(showCount + SHOW_FILMS_STEP);
  };

  const isShowButton = filterFilms.length >= showCount;

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
