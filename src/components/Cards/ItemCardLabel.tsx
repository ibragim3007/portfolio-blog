import React from 'react';
import { ItemCard } from '../../shared/layout/ItemCard';
import { Grid } from '@mui/joy';
import { Title } from '../../shared/typography/Title';

interface ItemCardLabelProps {
  children: React.ReactNode;
  label: string;
}

const ItemCardLabel: React.FC<ItemCardLabelProps> = ({ children, label }) => {
  return (
    <ItemCard>
      <Grid
        container
        flexDirection="column"
        gap={3}
        style={{ padding: 10 }}
        justifyContent="center"
        alignItems="center"
      >
        {children}
        <Title variant="text" style={{ fontWeight: 'bold', letterSpacing: 1.5, fontSize: 16 }}>
          {label}
        </Title>
      </Grid>
    </ItemCard>
  );
};

export default ItemCardLabel;
