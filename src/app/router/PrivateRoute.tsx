import React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { Role } from '../../shared/graphQL/@client/interface/meInterface';
import { config } from './routerConfig';

type PrivateRouteProps = RouteProps & {
  element: React.ReactNode;
  roles: Role[];
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, roles, ...rest }) => {
  const routeElement = roles.includes('ADMIN') ? element : <Navigate to={config.feed} />;
  return <Route {...rest} element={routeElement} />;
};

export default PrivateRoute;
