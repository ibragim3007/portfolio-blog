import React, { useState } from 'react';
import { Card } from '../../../shared/ui/layout/Card';
import LabelInput from '../../../components/Fields/LabelInput';
import { Button, Grid, Stack } from '@mui/joy';
import SignUpInfo from './SignUpInfo';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux/reduxHooks';
import ModalRegister from './ModalRegister/ModalRegister';
import { checkInputValue } from '../store/actions/checkInputValue';
import { changeValueInput } from '../store/actions/changeValueInput';

const SignUpForms = () => {
  const { fields } = useAppSelector((state) => state.signUpReducer);
  const dispath = useAppDispatch();

  const [open, setOpen] = useState(false);
  const openModalWindow = () => {
    dispath(checkInputValue(fields.firstName.id));
    dispath(checkInputValue(fields.lastName.id));
    if (!fields.firstName.value || !fields.lastName.value) {
      return;
    }
    setOpen(true);
  };

  const closeModalWindow = () => setOpen(false);

  const onChangeValue = (value: string, id: string) => {
    dispath(changeValueInput(value, id));
  };

  return (
    <Card>
      <SignUpInfo />
      <Stack spacing={2}>
        <Grid container justifyContent="space-between" style={{ width: '100%' }}>
          <LabelInput
            id={fields.firstName.id}
            value={fields.firstName.value}
            label={fields.firstName.label}
            onChange={onChangeValue}
            placeholder="Type your name"
            disabled={open}
            error={fields.firstName.error?.status}
            hint={fields.firstName.error?.message}
          />
          <LabelInput
            id={fields.lastName.id}
            value={fields.lastName.value}
            label={fields.lastName.label}
            onChange={onChangeValue}
            placeholder="Type your last name"
            error={fields.lastName.error?.status}
            hint={fields.lastName.error?.message}
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
