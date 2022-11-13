import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import HomePage from '../../pages/homepage/homepage';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Page404 from '../../pages/page404/page404';
import { HelmetProvider } from 'react-helmet-async';
import { OfferType } from '../../types/offer';

type AppScreenProps = {
  offers: OfferType[];
};

function App({ offers }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<HomePage offers={offers} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={`${AppRoute.Room}/:id`} element={<Room />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
export default App;
