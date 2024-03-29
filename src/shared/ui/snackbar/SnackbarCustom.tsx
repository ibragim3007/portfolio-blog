import { Button, Snackbar } from '@mui/joy';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/reduxHooks';
import { snackBarActions } from '../../store/snackbar/snackBarSlice';
import { Title } from '../typography/Title';

const SnackbarCustom: React.FC = () => {
  const { settings } = useAppSelector(state => state.snackBarReducer);
  const dispath = useAppDispatch();
  const handleClose = () => {
    dispath(
      snackBarActions.setSnack({
        open: false,
        message: '',
        color: 'neutral',
      }),
    );
  };

  return (
    <Snackbar
      color={settings.color}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={settings.open}
      onClose={handleClose}
      variant="solid"
      autoHideDuration={settings.duration}
      endDecorator={
        <Button onClick={handleClose} size="sm" variant="soft" color={settings.color}>
          Dismiss
        </Button>
      }
    >
      <Title variant="text">{settings.message}</Title>
    </Snackbar>
  );
};

export default SnackbarCustom;
