import { Grid } from '@mui/joy';
import React from 'react';
import { Title } from '../../shared/ui/typography/Title';
import { ItemCard } from '../../shared/ui/layout/ItemCard';

interface CardWrapperProps {
  children: React.ReactNode;
  label: string;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children, label }) => {
  return (
    <ItemCard style={{ background: 'transparent' }}>
      <Grid
        justifyContent="center"
        container
        gap={2}
        style={{
          borderRadius: 7,
          position: 'relative',
          padding: 40,
        }}
      >
        <ItemCard style={{ position: 'absolute', left: 30, top: -18, padding: '7px 13px' }}>
          <Title variant="title">{label}</Title>
        </ItemCard>
        <Grid container justifyContent="center" gap={4}>
          {children}
        </Grid>
      </Grid>
    </ItemCard>
  );
};

export default CardWrapper;
