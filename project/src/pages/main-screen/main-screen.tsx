import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
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

        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
