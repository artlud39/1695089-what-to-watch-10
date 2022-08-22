import { FilmType } from '../../types/films';

type PosterProps = {
  film: FilmType
}

function Poster({film}: PosterProps): JSX.Element {
  const {name, posterImage} = film;

  return (
    <div className="film-card__poster">
      <img src={posterImage} alt={name} width="218" height="327" />
    </div>
  );
}

export default Poster;
