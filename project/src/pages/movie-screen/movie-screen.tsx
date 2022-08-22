import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import SimilarFilms from '../../components/similar-films/similar-film';
import { useEffect } from 'react';
import { fetchCommentsAction, fetchFilmAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import FilmFullInfo from '../../components/film-full-info/film-full-info';

function MovieScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchFilmAction(String(id)));
    dispatch(fetchSimilarFilmsAction(String(id)));
    dispatch(fetchCommentsAction(String(id)));
  }, [id, dispatch]);


  return (
    <>
      <FilmFullInfo/>
      <div className="page-content">
        <SimilarFilms />

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MovieScreen;
