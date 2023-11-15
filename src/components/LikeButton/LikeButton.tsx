import { Button } from '@mui/joy';
import React from 'react';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

interface LikeButtonProps {
  amountOfLikes?: number;
  onClick?: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ amountOfLikes, onClick }) => {
  return (
    <Button
      variant="outlined"
      style={{ borderWidth: 1, borderColor: '#7d7d7d', fontSize: 14, padding: '0px 12px' }}
      onClick={onClick}
      color="neutral"
      startDecorator={<FavoriteBorder style={{ fontSize: 14 }} />}
    >
      {amountOfLikes || 0}
    </Button>
  );
};

export default LikeButton;
