import { Button, Stack } from '@mui/joy';
import React from 'react';
import LabelInput from '../../../../components/Fields/LabelInput';
import { useAppSelector } from '../../../../hooks/redux/reduxHooks';
import CModal from '../../../../shared/modals/CModal';
import { Title } from '../../../../shared/typography/Title';
import HiMessage from './HiMessage';

interface ModalRegisterProps {
  open: boolean;
  onClose: () => void;
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ open, onClose }) => {
  const { fields } = useAppSelector(state => state.signUpReducer);
  return (
    <CModal open={open} onClose={onClose}>
      <Stack spacing={2}>
        <Stack spacing={4}>
          <HiMessage />
          <Title variant="subtitle">Fill in the information about you.</Title>
        </Stack>

        <Stack spacing={2}>
          <LabelInput id={fields.email.id} value={fields.email.value} label={fields.email.label} />
          <LabelInput id={fields.password.id} value={fields.password.value} label={fields.password.label} />
          <Button type="submit">Submit</Button>
        </Stack>
      </Stack>
    </CModal>
  );
};

export default ModalRegister;
