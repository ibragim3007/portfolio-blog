import { Grid, Skeleton, Stack, Typography } from '@mui/joy';
import React from 'react';
import { Card } from '../../../shared/layout/Card';

const SkeletonCard = () => {
  return (
    <Grid style={{ width: '100%' }}>
      <Card>
        <Stack gap={3}>
          <Skeleton variant="circular" width={50} height={50}>
            <img alt="" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" />
          </Skeleton>
          <Typography>
            <Skeleton width={200}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis libero iure unde ipsum quia ipsa
              eius doloribus deleniti tempora totam magnam incidunt, dignissimos fugit.
            </Skeleton>
          </Typography>
        </Stack>
      </Card>
    </Grid>
  );
};

export default SkeletonCard;
