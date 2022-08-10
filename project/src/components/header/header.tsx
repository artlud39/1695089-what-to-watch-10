import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function Header(): JSX.Element {
  return (
    <header className='page-header film-card__head'>
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <ul className="user-block">
        <li className="user-block__item">
          <Link
            to={AppRoute.MyList}
            className="user-block__avatar"
          >
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </Link>
        </li>
        <li className="user-block__item">
          <a href="/" className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
