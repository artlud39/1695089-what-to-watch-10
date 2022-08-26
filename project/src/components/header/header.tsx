import { FormEvent } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { selectAuthStatus, selectAvatar } from '../../store/auth-slice/select';
import { getMylistUrl, getSignIntUrl } from '../../utils/route';


function Header(): JSX.Element {
  const isLoginPath = useMatch(AppRoute.SingIn);
  const authStatus = useAppSelector(selectAuthStatus);
  const dispatch = useAppDispatch();
  const avatarUrl = useAppSelector(selectAvatar);

  const handleLogout = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className='page-header film-card__head'>
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {
        !isLoginPath &&
        <ul className="user-block">
          {
            authStatus === AuthorizationStatus.Auth
              ? (
                <>
                  <li className="user-block__item">
                    <Link
                      to={getMylistUrl()}
                      className="user-block__avatar"
                    >
                      <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
                    </Link>
                  </li>
                  <li className="user-block__item">
                    <Link
                      to={AppRoute.Main}
                      className="user-block__link"
                      onClick={handleLogout}
                    >
                      Sign out
                    </Link>
                  </li>
                </>
              )
              : (
                <li className="user-block__item">
                  <Link to={getSignIntUrl()} className="user-block__link">Sign in</Link>
                </li>
              )
          }
        </ul>
      }
    </header>
  );
}

export default Header;
