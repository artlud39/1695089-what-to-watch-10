import { FilmsType } from '../../types/films';
import FilmsList from '../films-list/films-list';

type SimilarFilmsProps = {
  similarFilms: FilmsType,
}

function SimilarFilms({similarFilms}: SimilarFilmsProps): JSX.Element {

  return (
    <div className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      {similarFilms.length > 0 ? <FilmsList films={similarFilms} /> : <p>Sorry, we did not find anything.</p>}
    </div>
  );
}

export default SimilarFilms;
