import { Stack } from '@mui/joy';
import React from 'react';
import { Title } from '../../../../shared/typography/Title';
import { useAppSelector } from '../../../../hooks/redux/reduxHooks';

const HiMessage = () => {
  const { fields } = useAppSelector(state => state.signUpReducer);
  return (
    <Stack spacing={1}>
      <Title variant="title" style={{ fontWeight: '300' }}>
        Welcome{' '}
      </Title>
      <Title variant="title">
        {fields.firstName.value} {fields.lastName.value}!
      </Title>
    </Stack>
  );
};

export default HiMessage;
