import { Button, Grid, Stack } from '@mui/joy';
import React, { useEffect } from 'react';
import { Title } from '../../../../shared/ui/typography/Title';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/redux/reduxHooks';
import LabelInput from '../../../../components/Fields/LabelInput';
import BackButton from '../../../../components/BackButton/BackButton';
import { checkInputValue } from '../../store/actions/checkInputValue';
import { checkPassword } from '../../store/actions/helpers/checkPassword';
import { changeValueInput } from '../../store/actions/changeValueInput';
import { useMutation } from '@apollo/client';
import { SignUp } from '../../graphql/SignUp';
import { CreateUserInterface } from '../../graphql/interfaces/CreateUserInterface';
import { TOKEN_STRING } from '../../../../shared/constants/LocalStorageStrings';

interface ConfirmPasswordProps {
  closeFunction: () => void;
}

const ConfirmPassword: React.FC<ConfirmPasswordProps> = ({ closeFunction }) => {
  const { fields } = useAppSelector(state => state.signUpReducer);
  const dispath = useAppDispatch();

  const [createUser, { data, loading }] = useMutation<{ addUser: { token: string } }, { data: CreateUserInterface }>(
    SignUp,
  );

  const signUpButtonClick = async () => {
    const passwordCheck = checkPassword(fields.password.value);
    dispath(checkInputValue(fields.password.id, passwordCheck, passwordCheck !== ''));
    const isDifference = fields.password.value !== fields.repeatPassword.value;

    const repeatPasswordMessage = isDifference ? 'Passwords must match' : passwordCheck;
    dispath(checkInputValue(fields.repeatPassword.id, repeatPasswordMessage, passwordCheck !== '' || isDifference));

    if (fields.password.value === fields.repeatPassword.value && fields.password.value !== '') {
      await createUser({
        variables: {
          data: {
            firstName: fields.firstName.value,
            lastName: fields.lastName.value,
            email: fields.email.value,
            password: fields.password.value,
          },
        },
      });
    }
  };
  const onChangeValue = (value: string, id: string) => {
    dispath(changeValueInput(value, id));
  };

  useEffect(() => {
    if (data && !loading) {
      localStorage.setItem(TOKEN_STRING, data.addUser.token);
      window.location.reload();
    }
  }, [data, loading]);

  return (
    <Stack spacing={2}>
      <Grid container gap={2} alignItems="center">
        <BackButton onClick={closeFunction} />
        <Title variant="title">Almost there</Title>
      </Grid>
      <Title variant="subtitle">Create a password</Title>
      <LabelInput
        id={fields.password.id}
        value={fields.password.value}
        label={fields.password.label}
        error={fields.password.error?.status}
        hint={fields.password.error?.message}
        onChange={onChangeValue}
        type="password"
      />
      <LabelInput
        id={fields.repeatPassword.id}
        value={fields.repeatPassword.value}
        label={fields.repeatPassword.label}
        error={fields.repeatPassword.error?.status}
        hint={fields.repeatPassword.error?.message}
        onChange={onChangeValue}
        type="password"
      />
      <Button onClick={() => void signUpButtonClick()}>Sign Up</Button>
    </Stack>
  );
};

export default ConfirmPassword;
