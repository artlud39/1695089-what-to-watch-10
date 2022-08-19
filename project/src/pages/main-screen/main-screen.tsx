import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import PromoFilm from '../../components/promo-film/promo-film';
import { useAppSelector } from '../../hooks';
import { selectFilterFilms } from '../../store/films-slice/select';

function MainScreen(): JSX.Element {

  const films = useAppSelector(selectFilterFilms);

  return (
    <>
      <PromoFilm />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmsList films={films} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="#todo" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainScreen;
