import AddReviewForm from '../../components/add-review-form/add-review-form';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { selectFilm, selectIsLoadedError, selectIsLoadedFilm } from '../../store/film-slice/select';
import { useEffect } from 'react';
import { fetchFilmAction } from '../../store/api-actions';
import ServerErrorMessage from '../../components/server-error-message/server-error-message';
import Loader from '../../components/loader/loader';

function AddReviewScreen(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { backgroundColor, backgroundImage, name, posterImage } = useAppSelector(selectFilm);
  const isLoading = useAppSelector(selectIsLoadedFilm);
  const isErrorLoadFilm = useAppSelector(selectIsLoadedError);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader/>;
  }

  if (isErrorLoadFilm) {
    return <ServerErrorMessage/>;
  }

  const filmCardStyle = {
    backgroundColor,
  };

  return (
    <section className="film-card film-card--full" style={filmCardStyle}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review" >
        <AddReviewForm filmId={Number(id)}/>
      </div>

    </section>
  );
}

export default AddReviewScreen;
