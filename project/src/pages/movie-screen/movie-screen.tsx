import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import SimilarFilms from '../../components/similar-films/similar-film';
import { useEffect } from 'react';
import { fetchCommentsAction, fetchFilmAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import FilmFullInfo from '../../components/film-full-info/film-full-info';
import Footer from '../../components/footer/footer';

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

        <Footer/>
      </div>
    </>
  );
}

export default MovieScreen;
