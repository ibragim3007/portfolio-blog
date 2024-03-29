import { Button, Grid } from '@mui/joy';
import React from 'react';
import { Title } from '../../../shared/ui/typography/Title';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from 'react-router-dom';
import { config } from '../../../app/router/routerConfig';
import ClientProvider from '../../../shared/security/ClientProvider';

const SignUpButton = () => {
  return (
    <ClientProvider isShow={false} unAuthorizaton>
      <Grid xs>
        <Title variant="title">Are you here first time?</Title>
        <Title variant="text">
          Then sign up as soon as you can! . Feel free to wander through the virtual corridors and discover the stories
          and projects that make up my creative journey.
        </Title>
        <Grid container justifyContent="flex-end">
          <NavLink to={config.signup}>
            <Button endDecorator={<ArrowForwardIosIcon style={{ fontSize: 14 }} />}>Sign Up</Button>
          </NavLink>
        </Grid>
      </Grid>
    </ClientProvider>
  );
};

export default SignUpButton;
