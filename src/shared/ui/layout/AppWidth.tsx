import { Grid } from '@mui/material';
import React from 'react';

interface AppWidthProps {
  children: React.ReactNode;
  width?: number;
}

const AppWidth: React.FC<AppWidthProps> = ({ children, width }) => {
  return <Grid style={{ maxWidth: width || 1000, margin: '0 auto' }}>{children}</Grid>;
};

export default AppWidth;
