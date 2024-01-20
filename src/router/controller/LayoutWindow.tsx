import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Grid, IconButton } from '@mui/joy';
import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

interface LayoutWindowProps extends PropsWithChildren {
  value?: string;
}

const LayoutWindow: React.FC<LayoutWindowProps> = ({ value, children }) => {
  const navigate = useNavigate();

  const clickBackButton = () => {
    navigate(-1);
  };

  return (
    <Grid container gap={3}>
      <Grid>
        <IconButton size="lg" onClick={clickBackButton} variant="soft">
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid xs={12}>{children}</Grid>
    </Grid>
  );
};

export default LayoutWindow;
