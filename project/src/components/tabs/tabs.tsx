import { Link } from 'react-router-dom';
import {Tab} from '../../const';


function Tabs(): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className="film-nav__item film-nav__item--active">
          <Link to={``} className="film-nav__link">{Tab.Overview}</Link>
        </li>
        <li className="film-nav__item">
          <Link to={``} className="film-nav__link">{Tab.Details}</Link>
        </li>
        <li className="film-nav__item">
          <Link to={``} className="film-nav__link">{Tab.Reviews}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Tabs;

