import Film from '../film/film';
import { useEffect, useState } from 'react';
import { FilmsType } from '../../types/films';
import { SHOW_FILMS_STEP } from '../../const';
import ShowMoreButton from '../show-more-button/show-more-button';
import { useAppSelector } from '../../hooks';
import { selectActiveGenre } from '../../store/films-slice/select';

type FilmsListType = {
  films: FilmsType,
}

function FilmsList({films}: FilmsListType): JSX.Element {

  const [filmActiveId, setFilmActiveId] = useState<number | null>(null);
  const [showCount, setShowCount] = useState(SHOW_FILMS_STEP);

  const activeGenre = useAppSelector(selectActiveGenre);

  const onShowMoreBtnClick = () => {
    setShowCount(showCount + SHOW_FILMS_STEP);
  };

  const renderFilms = films.slice(0, showCount);

  const isShowButton = films.length >= showCount;

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
