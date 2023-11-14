import { Button } from '@mui/joy';
import React from 'react';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const LikeButton = () => {
  return (
    <Button variant="outlined" color="neutral" startDecorator={<FavoriteBorder />}>
      5
    </Button>
  );
};

export default LikeButton;
