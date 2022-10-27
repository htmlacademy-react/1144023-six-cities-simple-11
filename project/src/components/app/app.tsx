import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import HomePage from '../../pages/homepage/homepage';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Page404 from '../../pages/page404/page404';


type AppScreenProps = {
  offerCount: number;
};

function App({ offerCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<HomePage offerCount={offerCount} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Offer />} />
        {/* <Route
          path={AppRoute.Room}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
              notLoggedElem={<RentItemNotLogged />}
            >
              <RentItem />
            </PrivateRoute>
          }
        /> */}
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
