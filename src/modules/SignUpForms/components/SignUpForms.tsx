import React, { useState } from 'react';
import { Card } from '../../../shared/layout/Card';
import LabelInput from '../../../components/Fields/LabelInput';
import { Button, Grid, Stack } from '@mui/joy';
import SignUpInfo from './SignUpInfo';
import { useAppSelector } from '../../../hooks/redux/reduxHooks';
import ModalRegister from './ModalRegister/ModalRegister';

const SignUpForms = () => {
  const { fields } = useAppSelector(state => state.signUpReducer);

  const [open, setOpen] = useState(false);
  const openModalWindow = () => setOpen(true);
  const closeModalWindow = () => setOpen(false);

  return (
    <Card>
      <SignUpInfo />
      <Stack spacing={2}>
        <Grid container justifyContent="space-between" style={{ width: '100%' }}>
          <LabelInput
            id={fields.firstName.id}
            value={fields.firstName.value}
            label={fields.firstName.label}
            placeholder="Type your name"
            disabled={open}
          />
          <LabelInput
            id={fields.lastName.id}
            value={fields.lastName.value}
            label={fields.lastName.label}
            placeholder="Type your last name"
            disabled={open}
          />
        </Grid>
        <Grid container style={{ width: '100%' }} justifyContent="flex-end">
          <Button onClick={openModalWindow}>Next</Button>
        </Grid>
        <ModalRegister open={open} onClose={closeModalWindow} />
      </Stack>
    </Card>
  );
};

export default SignUpForms;
