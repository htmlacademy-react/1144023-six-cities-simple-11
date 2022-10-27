import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <div
      style={{ margin: '100px auto', maxWidth: '400px', textAlign: 'center' }}
    >
      <Helmet>
        <title>Ошибка 404</title>
      </Helmet>
      <h1>Ошибка 404</h1>
      <h2>Страница не найдена.</h2>
      <Link to='/' style={{ textDecoration: 'underline' }}>Вернуться на главную</Link>
    </div>
  );
}

export default Page404;
