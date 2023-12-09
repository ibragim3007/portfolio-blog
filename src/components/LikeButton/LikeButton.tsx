import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/joy';
import React from 'react';
import LoadingCircle from '../Loading/LoadingCircle';

interface LikeButtonProps {
  amountOfLikes?: number;
  onClick?: () => void;
  lightUp?: boolean;
  loading?: boolean;
}

const LikeButton: React.FC<LikeButtonProps> = ({ amountOfLikes, onClick, lightUp, loading }) => {
  return (
    <Button
      variant="outlined"
      style={{
        borderWidth: 1,
        borderColor: '#7d7d7d',
        fontSize: 14,
        padding: '0px 12px',
        backgroundColor: lightUp ? '#7382f0' : 'transparent',
      }}
      onClick={onClick}
      color="neutral"
      disabled={loading}
      startDecorator={<FavoriteBorder style={{ fontSize: 14 }} />}
    >
      {loading ? <LoadingCircle /> : amountOfLikes || 0}
    </Button>
  );
};

export default LikeButton;
