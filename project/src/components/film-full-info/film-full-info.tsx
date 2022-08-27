import { useAppSelector } from '../../hooks/index';
import { selectFilm } from '../../store/film-slice/select';
import Header from '../header/header';
import PosterInfo from '../poster-info/poster-info';
import Poster from '../poster/poster';
import Tabs from '../tabs/tabs';

function FilmFullInfo(): JSX.Element {

  const film = useAppSelector(selectFilm);

  const { backgroundImage, backgroundColor } = film;

  const filmCardStyle = {
    backgroundColor,
  };

  return (
    <section className="film-card film-card--full" style={filmCardStyle}>
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={backgroundImage} alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__wrap">
          <PosterInfo film={film}/>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <Poster film={film}/>

          <div className="film-card__desc">
            <Tabs film={film}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmFullInfo;
