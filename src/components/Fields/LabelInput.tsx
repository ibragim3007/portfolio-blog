import React from 'react';
import { Input } from '../../shared/inputs/Input';
import { Title } from '../../shared/typography/Title';
import { Grid } from '@mui/joy';

interface LabelInputProps {
  label?: string;
  type?: 'password';
  placeholder?: string;
  onChange?: (value: string) => void;
}

const LabelInput: React.FC<LabelInputProps> = ({ label, type, onChange, placeholder }) => {
  return (
    <Grid>
      <Title style={{ margin: 5 }} variant="text">
        {label}
      </Title>
      <Input placeholder={placeholder} type={type || 'text'} />
    </Grid>
  );
};

export default LabelInput;
