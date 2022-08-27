import FilmsList from '../films-list/films-list';
import { useAppSelector } from '../../hooks/index';
import { MAX_COUNT_SHOW_SIMILAR_FILMS } from '../../const';
import { selectSimilarFilms } from '../../store/film-slice/select';

function SimilarFilms(): JSX.Element {
  const similarFilms = useAppSelector(selectSimilarFilms)
    .slice(0, MAX_COUNT_SHOW_SIMILAR_FILMS);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmsList films={similarFilms}/>
    </section>
  );
}

export default SimilarFilms;
