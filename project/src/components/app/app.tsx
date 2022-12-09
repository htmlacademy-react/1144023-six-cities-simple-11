import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Homepage from '../../pages/homepage/homepage';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Page404 from '../../pages/page404/page404';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';


function App(): JSX.Element {

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<Homepage />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={`${AppRoute.Room}/:id`} element={<Room />} />
          <Route path={AppRoute.NotFound} element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
export default App;
