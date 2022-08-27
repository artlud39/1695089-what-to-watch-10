import { useAppSelector } from '../../hooks';
import { selectPromoFilm } from '../../store/promo-slice/select';
import Header from '../header/header';
import PosterInfo from '../poster-info/poster-info';
import Poster from '../poster/poster';

function PromoFilm(): JSX.Element {

  const promoFilm = useAppSelector(selectPromoFilm);
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
          <Poster film={promoFilm}/>
          <PosterInfo film={promoFilm}/>
        </div>
      </div>
    </section>
  );
}

export default PromoFilm;
