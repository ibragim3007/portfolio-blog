import { Grid } from '@mui/joy';
import React from 'react';
import LabelInput from '../../../../components/Fields/LabelInput';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/redux/reduxHooks';
import { changeValueInput } from '../../store/actions/changeValueInput';

const Inputs = () => {
  const fields = useAppSelector(state => state.signInReducer.fields);
  const dispath = useAppDispatch();
  const onChange = (value: string, id: string) => {
    dispath(changeValueInput(value, id));
  };
  return (
    <Grid container gap={3}>
      <LabelInput
        id={fields.email.id}
        value={fields.email.value}
        label={fields.email.label}
        error={fields.email.error?.status}
        hint={fields.email.error?.message}
        onChange={onChange}
      />
      <LabelInput
        id={fields.password.id}
        value={fields.password.value}
        label={fields.password.label}
        error={fields.password.error?.status}
        hint={fields.password.error?.message}
        type="password"
        onChange={onChange}
      />
    </Grid>
  );
};

export default Inputs;
