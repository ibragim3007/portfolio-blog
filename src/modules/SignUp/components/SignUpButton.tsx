import { Button, Grid } from '@mui/joy';
import React from 'react';
import { Title } from '../../../shared/typography/Title';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SignUpButton = () => {
  return (
    <Grid xs>
      <Title variant="title">Are you here first time?</Title>
      <Title variant="text">
        Then sign up as soon as you can! . Feel free to wander through the virtual corridors and discover the stories
        and projects that make up my creative journey.
      </Title>
      <Grid container justifyContent="flex-end" style={{ marginRight: 50 }}>
        <Button endDecorator={<ArrowForwardIosIcon style={{ fontSize: 14 }} />}>Sign Up</Button>
      </Grid>
    </Grid>
  );
};

export default SignUpButton;
