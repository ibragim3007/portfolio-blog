import { Button, Grid, Stack } from '@mui/joy';
import React from 'react';
import { Title } from '../../../../shared/typography/Title';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/reduxHooks';
import LabelInput from '../../../../components/Fields/LabelInput';
import BackButton from '../../../../components/BackButton/BackButton';
import { checkInputValue } from '../../store/actions/checkInputValue';
import { checkPassword } from '../../store/actions/helpers/checkPassword';
import { changeValueInput } from '../../store/actions/changeValueInput';

interface ConfirmPasswordProps {
  closeFunction: () => void;
}

const ConfirmPassword: React.FC<ConfirmPasswordProps> = ({ closeFunction }) => {
  const { password, repeatPassword } = useAppSelector(state => state.signUpReducer.fields);
  const dispath = useAppDispatch();

  const signUpButtonClick = () => {
    const passwordCheck = checkPassword(password.value);
    dispath(checkInputValue(password.id, passwordCheck, passwordCheck !== ''));
    const isDifference = password.value !== repeatPassword.value;

    const repeatPasswordMessage = isDifference ? 'Passwords must match' : passwordCheck;
    dispath(checkInputValue(repeatPassword.id, repeatPasswordMessage, passwordCheck !== '' || isDifference));
  };
  const onChangeValue = (value: string, id: string) => {
    dispath(changeValueInput(value, id));
  };

  return (
    <Stack spacing={2}>
      <Grid container gap={2} alignItems="center">
        <BackButton onClick={closeFunction} />
        <Title variant="title">Almost there</Title>
      </Grid>
      <Title variant="subtitle">Create a password</Title>
      <LabelInput
        id={password.id}
        value={password.value}
        label={password.label}
        error={password.error?.status}
        hint={password.error?.message}
        type="password"
        onChange={onChangeValue}
      />
      <LabelInput
        id={repeatPassword.id}
        value={repeatPassword.value}
        label={repeatPassword.label}
        error={repeatPassword.error?.status}
        hint={repeatPassword.error?.message}
        type="password"
        onChange={onChangeValue}
      />
      <Button onClick={signUpButtonClick}>Sign Up</Button>
    </Stack>
  );
};

export default ConfirmPassword;
