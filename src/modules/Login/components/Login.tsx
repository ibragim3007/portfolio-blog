import { Button, Grid } from '@mui/joy';
import React, { useEffect } from 'react';
import { Title } from '../../../shared/ui/typography/Title';
import Inputs from './Inputs/Inputs';
import { Card } from '../../../shared/ui/layout/Card';
import SignUpButton from '../../SignUp';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux/reduxHooks';
import { checkInputValue } from '../store/actions/checkInputValue';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/Login';
import { LoginResponseInterface } from '../graphql/interfaces/LoginInterface';
import { TOKEN_STRING } from '../../../shared/constants/LocalStorageStrings';
import { Inform } from '@/shared/service/log/log.service';

const Login = () => {
  const dispath = useAppDispatch();
  const fields = useAppSelector((state) => state.signInReducer.fields);

  const [login, { data, loading, error }] = useMutation<
    { login: LoginResponseInterface },
    { data: { email: string; password: string } }
  >(LOGIN);

  const handlerLoginButton = async () => {
    try {
      dispath(checkInputValue(fields.email.id));
      dispath(checkInputValue(fields.password.id));
      if (!fields.email.value || !fields.password.value) {
        return;
      }
      await login({
        variables: {
          data: {
            email: fields.email.value,
            password: fields.password.value,
          },
        },
      });
    } catch (e) {
      Inform.error(e);
    }
  };

  useEffect(() => {
    if (data && !loading) {
      localStorage.setItem(TOKEN_STRING, data.login.token);
      window.location.reload();
    }
  }, [data, loading]);

  return (
    <Card style={{ marginTop: 20 }}>
      <Grid gap={10} container>
        <Grid container gap={3} style={{ maxWidth: 250 }}>
          <Title variant="title">Login to blog</Title>
          <Inputs />
          <Grid container justifyContent="space-between" style={{ width: '100%' }}>
            <Button disabled variant="plain">
              Forgot password
            </Button>
            <Button onClick={() => void handlerLoginButton()}>Login</Button>
          </Grid>
        </Grid>
        <SignUpButton />
      </Grid>
    </Card>
  );
};

export default Login;
