import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';
import { FilmType } from '../../types/films';

interface FilmProps {
  film: FilmType,
  setFilmActive: React.Dispatch<React.SetStateAction<number | null>>,
  isFilmActive: boolean
}

function Film({film, setFilmActive, isFilmActive}: FilmProps): JSX.Element {

  const handleMouseEnter = () => {
    setFilmActive(film.id);
  };

  const handleMouseLeave = () => {
    setFilmActive(null);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        {isFilmActive
          ? <VideoPlayer previewVideoLink={film.previewVideoLink} posterImage={film.posterImage}/>
          : <img src={film.previewImage} alt={film.name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Movie, {id: String(film.id)})}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default Film;

