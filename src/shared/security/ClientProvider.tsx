import React from 'react';
import { Role } from '../graphQL/@client/interface/meInterface';
import { useAppSelector } from '../hooks/redux/reduxHooks';

interface ClientProviderProps {
  children: React.ReactNode;
  role?: Role;
  isShow?: boolean;
  unAuthorizaton?: boolean;
}

const ClientProvider: React.FC<ClientProviderProps> = ({ children, role = 'USER', isShow = true, unAuthorizaton }) => {
  const me = useAppSelector((state) => state.meReducer.me);

  // if (me?.role === 'ADMIN') return <>{children}</>;
  if (!me && unAuthorizaton) return <>{children}</>;
  else if ((me?.role === role || me?.role === 'ADMIN') && isShow) return <>{children}</>;
  else return null;
};

export default ClientProvider;
