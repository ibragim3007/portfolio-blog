import React from 'react';
import { Role } from '../GraphQL/@client/interfaces/meInterface';
import { useAppSelector } from '../hooks/redux/reduxHooks';

interface ClientProviderProps {
  children: React.ReactNode;
  role?: Role;
  isShow?: boolean;
  unAuthorizaton?: boolean;
}

const ClientProvider: React.FC<ClientProviderProps> = ({ children, role = 'USER', isShow = true, unAuthorizaton }) => {
  const me = useAppSelector(state => state.meReducer.me);

  if (!me && unAuthorizaton) return <>{children}</>;
  else if (me?.role === role && isShow) return <>{children}</>;
  else return null;
};

export default ClientProvider;
