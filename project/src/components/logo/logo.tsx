import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  className?: string;
}

function Logo({className}: LogoProps): JSX.Element {
  return (
    <div className='logo'>
      <Link className={classNames('logo__link', className)} to={AppRoute.Main}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
