import { Stack } from '@mui/joy';
import React from 'react';

import { Title } from '../../shared/ui/typography/Title';
import { Textarea } from '../../shared/ui/inputs/Textarea';
import { Input } from '../../shared/ui/inputs/Input';

interface LabelInputProps {
  id: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  hint?: string;
  multiline?: boolean;
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
  multiline,
  onChange,
}) => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value, id);
  };

  return (
    <Stack spacing={1}>
      <Title variant="text" style={{ fontWeight: 'bold' }}>
        {label}
      </Title>
      {multiline ? (
        <Textarea
          disabled={disabled}
          onChange={onChangeInput}
          value={value}
          placeholder={placeholder}
          color={error ? 'error' : 'primary'}
        />
      ) : (
        <Input
          disabled={disabled}
          onChange={onChangeInput}
          value={value}
          placeholder={placeholder}
          type={type || 'text'}
          color={error ? 'error' : 'primary'}
        />
      )}
      {hint && (
        <Title error={error} variant="subtitle">
          {hint}
        </Title>
      )}
    </Stack>
  );
};

export default LabelInput;
