import { Grid } from '@mui/joy';
import React from 'react';

interface AppWidthProps {
  children: React.ReactNode;
}

const AppWidth: React.FC<AppWidthProps> = ({ children }) => {
  return <Grid style={{ maxWidth: 1000, margin: '0 auto' }}>{children}</Grid>;
};

export default AppWidth;
