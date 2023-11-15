import React from 'react';
import { Card } from '../../../shared/layout/Card';
import LabelInput from '../../../components/Fields/LabelInput';
import { Grid } from '@mui/joy';
import NextButton from './NextButton';
import SignUpInfo from './SignUpInfo';

const SignUpForms = () => {
  return (
    <Card>
      <SignUpInfo />
      <Grid container gap={2}>
        <Grid container justifyContent="space-between" style={{ width: '100%' }}>
          <LabelInput label="First name" placeholder="Type your name" />
          <LabelInput label="Last name" placeholder="Type your last name" />
        </Grid>
        <Grid container style={{ width: '100%' }} justifyContent="flex-end">
          <NextButton />
        </Grid>
      </Grid>
    </Card>
  );
};

export default SignUpForms;
