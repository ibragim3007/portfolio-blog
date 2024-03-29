import React from 'react';
import { ItemCard } from '../../shared/ui/layout/ItemCard';
import { Grid } from '@mui/joy';
import { Title } from '../../shared/ui/typography/Title';
import styles from './css/styles.module.css';

interface ItemCardLabelProps {
  children: React.ReactNode;
  label: string;
  href?: string;
}

const ItemCardLabel: React.FC<ItemCardLabelProps> = ({ children, label, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <ItemCard className={styles.itemCardStyle}>
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
    </a>
  );
};

export default ItemCardLabel;
