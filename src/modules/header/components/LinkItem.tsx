import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/styles.css';

interface LinkItemProps {
  children: React.ReactNode;
  to: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ children, to }) => {
  return (
    <NavLink className={navData => (navData.isActive ? 'active-nav-link' : '')} to={to}>
      {children}
    </NavLink>
  );
};

export default LinkItem;
