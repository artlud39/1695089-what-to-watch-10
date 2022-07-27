import { generatePath, Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import VideoPlayer from '../video-player/video-player';

interface IFilmProps {
  id: string,
  picture: string,
  title: string,
  video: string,
  poster: string,
  setFilmActive: React.Dispatch<React.SetStateAction<string | null>>,
  isFilmActive: boolean
}

function Film({picture, video, poster, title, id, setFilmActive, isFilmActive}: IFilmProps): JSX.Element {

  const handleMouseEnter = () => {
    setFilmActive(id);
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
          ? <VideoPlayer video={video} poster={poster}/>
          : <img src={picture} alt={title} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Movie, {id})}>{title}</Link>
      </h3>
    </article>
  );
}

export default Film;

