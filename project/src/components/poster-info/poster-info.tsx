import { Link, useMatch } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { selectAuthStatus } from '../../store/auth-slice/select';
import { AppRoute, AuthorizationStatus, PlayType } from '../../const';
import { FilmType } from '../../types/films';
import { selectFavoritesCount } from '../../store/films-slice/select';
import { addToFavoriteAction } from '../../store/api-actions';
import { setPlayType } from '../../store/player-slice/player-slice';
import { getAddReviewUrl, getPlayerUrl } from '../../utils/route';

type PosterInfoProps = {
  film: FilmType
}

function PosterInfo({film}: PosterInfoProps): JSX.Element {
  const {id, name, genre, released, isFavorite} = film;
  const dispatch = useAppDispatch();
  const isAuthStatus = useAppSelector(selectAuthStatus);
  const favoriteCount = useAppSelector(selectFavoritesCount);
  const isFilmPath = useMatch(AppRoute.Film);


  const handleAddToFavorite = () => {
    const status = +!isFavorite;
    dispatch(addToFavoriteAction({id, status}));
  };

  const handlePlayFilm = () => {
    const type = isFilmPath ? PlayType.Film : PlayType.Promo;
    dispatch(setPlayType(type));
  };

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{released}</span>
      </p>

      <div className="film-card__buttons">
        <Link
          to={getPlayerUrl(id)}
          className="btn btn--play film-card__button"
          type="button"
          onClick={handlePlayFilm}
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
            onClick={handleAddToFavorite}
          >
            {
              isFavorite === true ?
                <svg viewBox="0 0 18 14" width="18" height="14">
                  <use xlinkHref="#in-list"></use>
                </svg>
                :
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
            }

            <span>My list</span>
            <span className="film-card__count">{favoriteCount}</span>
          </button>
        }

        {
          isAuthStatus === AuthorizationStatus.Auth &&
          <Link
            to={getAddReviewUrl(id)}
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
