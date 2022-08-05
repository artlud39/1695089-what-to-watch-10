import { Link } from 'react-router-dom';
import { FilmType } from '../../types/films';

type TabsPropsType = {
  film: FilmType,
}

function Tabs({film}: TabsPropsType): JSX.Element {
  const {
    description,
    rating,
    scoresCount,
    director,
    starring
  } = film;

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <Link to="#" className="film-nav__link">Overview</Link>
          </li>
          <li className="film-nav__item film-nav__item--active">
            <Link to="#" className="film-nav__link">Details</Link>
          </li>
          <li className="film-nav__item">
            <Link to="#" className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className='film-card__text'>{description}</p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">{starring.join(', ')}</span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">1h 39m</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">Comedy</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">2014</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;

