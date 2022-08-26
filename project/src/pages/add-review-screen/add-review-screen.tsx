import AddReviewForm from '../../components/add-review-form/add-review-form';
import { Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import { selectFilms} from '../../store/films-slice/select';
import Header from '../../components/header/header';

function AddReviewScreen(): JSX.Element {
  const { id } = useParams();
  const films = useAppSelector(selectFilms);
  const film = films.find((movie) => String(movie.id) === id);

  if (!film) {
    return <Navigate to={AppRoute.NotFound} />;
  }
  const { backgroundColor } = film;

  const filmCardStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <section className="film-card film-card--full" style={filmCardStyle}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review" >
        <AddReviewForm filmId={Number(id)}/>
      </div>

    </section>
  );
}

export default AddReviewScreen;
