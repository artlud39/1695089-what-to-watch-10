import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/index';
import { selectAuthStatus } from '../../store/auth-slice/select';
import { AuthorizationStatus } from '../../const';
import { FilmType } from '../../types/films';

type PosterInfoProps = {
  film: FilmType
}

function PosterInfo({film}: PosterInfoProps): JSX.Element {
  const {id, name, genre, released} = film;
  const isAuthStatus = useAppSelector(selectAuthStatus);
  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{released}</span>
      </p>

      <div className="film-card__buttons">
        <Link
          to={`/player/${id}`}
          className="btn btn--play film-card__button"
          type="button"
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"/>
          </svg>
          <span>Play</span>
        </Link>

        {
          isAuthStatus === AuthorizationStatus.Auth &&
          <button
            className="btn btn--list film-card__button"
            type="button"
          >
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"/>
            </svg>
            <span>My list</span>
            <span className="film-card__count">9</span>
          </button>
        }

        {
          isAuthStatus === AuthorizationStatus.Auth &&
          <Link
            to={`/movie/${id}/review`}
            className="btn film-card__button"
          >
            Add review
          </Link>
        }
      </div>
    </div>
  );
}

export default PosterInfo;
