import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/joy';

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <IconButton variant="outlined" onClick={onClick} color="neutral">
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
