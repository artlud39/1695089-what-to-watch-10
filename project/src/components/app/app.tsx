import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SingInScreen from '../../pages/sing-in-screen/sing-in-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../../components/private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../utils/browser-history';
import { selectAuthStatus } from '../../store/auth-slice/select';
import { selectIsLoadedPromo } from '../../store/promo-slice/select';
import { selectIsLoadedFilms } from '../../store/films-slice/select';

function App(): JSX.Element {
  const isFilmsLoad = useAppSelector(selectIsLoadedFilms);
  const isPromoLoad = useAppSelector(selectIsLoadedPromo);
  const authStatus = useAppSelector(selectAuthStatus);

  if (authStatus === AuthorizationStatus.Unknown || isFilmsLoad || isPromoLoad) {
    return <LoadingScreen />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.SingIn}
          element={<SingInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <MovieScreen />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReviewScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
