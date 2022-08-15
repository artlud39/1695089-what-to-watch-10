import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectAuthStatus } from '../../store/select';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector(selectAuthStatus);
  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SingIn} />
  );
}

export default PrivateRoute;
