import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <div
      style={{ margin: '100px auto', maxWidth: '400px', textAlign: 'center' }}
    >
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <h1>Error 404</h1>
      <h2>Page not found.</h2>
      <Link to='/' style={{ textDecoration: 'underline' }}>Back to Homepage</Link>
    </div>
  );
}

export default Page404;
