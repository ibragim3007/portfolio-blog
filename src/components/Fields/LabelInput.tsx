import { Stack } from '@mui/joy';
import React from 'react';
import { Input } from '../../shared/inputs/Input';
import { Title } from '../../shared/typography/Title';

interface LabelInputProps {
  id: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  hint?: string;
  onChange: (value: string, id: string) => void;
}

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  type,
  placeholder,
  value,
  id,
  disabled,
  error,
  hint,
  onChange,
}) => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, id);
  };

  return (
    <Stack spacing={1}>
      <Title variant="text">{label}</Title>
      <Input
        disabled={disabled}
        onChange={onChangeInput}
        value={value}
        placeholder={placeholder}
        type={type || 'text'}
        color={error ? 'error' : 'primary'}
      />
      {hint && (
        <Title error={error} variant="subtitle">
          {hint}
        </Title>
      )}
    </Stack>
  );
};

export default LabelInput;
