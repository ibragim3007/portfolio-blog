import { Grid, Skeleton } from '@mui/joy';
import React from 'react';
import { Card } from '../../../shared/ui/layout/Card';

const SkeletonCard = () => {
  return (
    <Grid style={{ width: '100%' }}>
      <Card>
        <Grid alignItems="center" container flexDirection="row" gap={3}>
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton width={250} variant="text" />
        </Grid>
      </Card>
    </Grid>
  );
};

export default SkeletonCard;
