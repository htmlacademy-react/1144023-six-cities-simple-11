import { Helmet } from 'react-helmet-async';
import HeaderSvg from '../../components/header/header-svg';
import HeaderLogo from '../../components/header/header-logo';
import useAppDispatch from '../../hooks/useAppDispatch';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useEffect, useRef } from 'react';
import { AppRoute, AuthorizationStatus, Cities } from '../../const';
import { AuthType } from '../../types/auth';
import { loginAction } from '../../store/api-actions';
import { toast } from 'react-toastify';
import useAppSelector from '../../hooks/useAppSelector';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  useEffect(() => {
    authorizationStatus === AuthorizationStatus.Auth && navigate(AppRoute.Main);
  }, [authorizationStatus, navigate]);

  const handleLoginFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      const password = passwordRef.current.value.trim();
      const passwordMask = /([0-9].*[a-z])|([a-z].*[0-9])/;

      if (!password.length || !passwordMask.test(password)) {
        toast.warn('Password must contain at least one number and one letter');
        return;
      }

      const authData: AuthType = {
        email: emailRef.current.value,
        password: password,
      };

      dispatch(loginAction(authData));
    }
  };

  return (
    <div className='page page--gray page--login'>
      <Helmet>
        <title>Please sign in</title>
      </Helmet>
      <HeaderSvg />
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <HeaderLogo />
            </div>
          </div>
        </div>
      </header>

      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form
              className='login__form form'
              action='#'
              method='post'
              onSubmit={handleLoginFormSubmit}
            >
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input
                  className='login__input form__input'
                  type='email'
                  name='email'
                  placeholder='Email'
                  ref={emailRef}
                  required
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input
                  className='login__input form__input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  ref={passwordRef}
                  required
                />
              </div>
              <button
                className='login__submit form__submit button'
                type='submit'
              >
                Sign in
              </button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <Link className='locations__item-link' to={AppRoute.Main}>
                <span>{Cities[0].name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
