import Film from '../film/film';
import { useState } from 'react';
import { FilmsType } from '../../types/films';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getActiveGenre } from '../../store/select';
import ShowMoreButton from '../show-more-button/show-more-button';
import {SHOW_FILMS_STEP} from '../../const';
import { showMoreFilms } from '../../store/actions';


type FilmsListType = {
  films: FilmsType,
}

function FilmsList({films}: FilmsListType): JSX.Element {
  const dispatch = useAppDispatch();
  const renderFilmsCount = useAppSelector((state) => state.renderFilmsCount);

  const [filmActiveId, setFilmActiveId] = useState<number | null>(null);

  const activeGenre = useAppSelector(getActiveGenre);
  const filterFilms = (activeGenre === 'All Genres') ? films : films.filter((film) => film.genre === activeGenre);

  const onShowMoreBtnClick = () => {
    dispatch(showMoreFilms(renderFilmsCount + SHOW_FILMS_STEP));
  };

  const isShowButton = filterFilms.length >= renderFilmsCount;

  return (
    <>
      <div className="catalog__films-list">
        {filterFilms.slice(0, renderFilmsCount).map((film) => (
          <Film
            isFilmActive={film.id === filmActiveId}
            setFilmActive={setFilmActiveId}
            key={film.id}
            film={film}
          />
        ))}
      </div>
      {isShowButton ? <ShowMoreButton onClick={onShowMoreBtnClick} /> : ''}
    </>
  );
}

export default FilmsList;
