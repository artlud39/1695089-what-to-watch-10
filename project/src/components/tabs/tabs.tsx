import { Link } from 'react-router-dom';
import { Tab } from '../../const';
import { useFilmTab } from '../../hooks/use-film-tab';
import { FilmType } from '../../types/films';
import Details from '../details/details';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';
import classNames from 'classnames';

type TabsProps = {
  film: FilmType
}

function Tabs({film}: TabsProps): JSX.Element {

  const activeTab = useFilmTab();

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={classNames('film-nav__item', {'film-nav__item--active': activeTab === Tab.Overview})}>
            <Link to={{ search: `?tab=${Tab.Overview}` }} className="film-nav__link" >Overview</Link>
          </li>
          <li className={classNames('film-nav__item', {'film-nav__item--active': activeTab === Tab.Details})}>
            <Link to={{ search:`?tab=${Tab.Details}` }} className="film-nav__link">Details</Link>
          </li>
          <li className={classNames('film-nav__item', {'film-nav__item--active': activeTab === Tab.Reviews})}>
            <Link to={{ search:`?tab=${Tab.Reviews}` }} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      {
        activeTab === Tab.Overview &&
        <Overview film={film}/>
      }

      {
        activeTab === Tab.Details &&
        <Details film={film}/>
      }

      {
        activeTab === Tab.Reviews &&
        <Reviews/>
      }
    </div>
  );
}

export default Tabs;
