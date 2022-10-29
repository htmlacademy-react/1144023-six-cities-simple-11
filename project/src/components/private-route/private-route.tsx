import {AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  notLoggedElem:JSX.Element;
};

function PrivateRoute({authorizationStatus, children, notLoggedElem}: PrivateRouteProps): JSX.Element {
  return authorizationStatus === AuthorizationStatus.Auth ? children : notLoggedElem;
}

export default PrivateRoute;
