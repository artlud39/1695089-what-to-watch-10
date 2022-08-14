import { FilmType } from '../../types/films';
import Header from '../header/header';
import Poster from '../poster/poster';

type PromoFilmProps = {
  promoFilm: FilmType,
}

function PromoFilm({promoFilm}: PromoFilmProps) {

  const {name, backgroundImage} = promoFilm;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <Poster promoFilm={promoFilm}/>
        </div>
      </div>
    </section>
  );
}

export default PromoFilm;
