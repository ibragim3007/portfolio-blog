import React from 'react';
import { Input } from '../../shared/inputs/Input';
import { Title } from '../../shared/typography/Title';
import { Stack } from '@mui/joy';
import { useAppDispatch } from '../../hooks/redux/reduxHooks';
import { changeValueInput } from '../../modules/SignUpForms/store/actions/changeValueInput';

interface LabelInputProps {
  id: string;
  label?: string;
  type?: 'password';
  placeholder?: string;
  value?: string;
  disabled?: boolean;
}

const LabelInput: React.FC<LabelInputProps> = ({ label, type, placeholder, value, id, disabled }) => {
  const dispath = useAppDispatch();
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispath(changeValueInput(e.target.value, id));
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
      />
    </Stack>
  );
};

export default LabelInput;
