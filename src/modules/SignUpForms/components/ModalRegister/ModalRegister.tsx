import { Button, Stack } from '@mui/joy';
import React, { useEffect, useState } from 'react';
import LabelInput from '../../../../components/Fields/LabelInput';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/reduxHooks';
import CModal from '../../../../shared/modals/CModal';
import { Title } from '../../../../shared/typography/Title';
import HiMessage from './HiMessage';
import { checkInputValue } from '../../store/actions/checkInputValue';
import ConfirmPassword from './ConfirmPassword';

interface ModalRegisterProps {
  open: boolean;
  onClose: () => void;
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ open, onClose }) => {
  const { fields } = useAppSelector(state => state.signUpReducer);
  const [confirmingPassword, setConfirmingPassword] = useState(false);

  useEffect(() => {
    setConfirmingPassword(false);
  }, []);

  const dispath = useAppDispatch();

  const clickContinue = () => {
    dispath(checkInputValue(fields.email.id));
    if (fields.email.value !== '') setConfirmingPassword(true);
  };

  return (
    <CModal open={open} onClose={onClose}>
      {confirmingPassword ? (
        <ConfirmPassword closeFunction={() => setConfirmingPassword(false)} />
      ) : (
        <Stack spacing={2}>
          <Stack spacing={3}>
            <HiMessage />
            <Title variant="subtitle">Fill in the information about you.</Title>
          </Stack>
          <Stack spacing={2}>
            <LabelInput
              id={fields.email.id}
              value={fields.email.value}
              label={fields.email.label}
              error={fields.email.error?.status}
              hint={fields.email.error?.message}
              type="email"
            />
            <Button onClick={clickContinue} type="submit">
              Continue
            </Button>
          </Stack>
        </Stack>
      )}
    </CModal>
  );
};

export default ModalRegister;
