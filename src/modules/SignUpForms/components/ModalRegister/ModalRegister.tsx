import { Button, Stack } from '@mui/joy';
import React from 'react';
import LabelInput from '../../../../components/Fields/LabelInput';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/reduxHooks';
import CModal from '../../../../shared/modals/CModal';
import { Title } from '../../../../shared/typography/Title';
import HiMessage from './HiMessage';
import { checkInputValue } from '../../store/actions/checkInputValue';
import { checkPassword } from '../../store/actions/helpers/checkPassword';

interface ModalRegisterProps {
  open: boolean;
  onClose: () => void;
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ open, onClose }) => {
  const { fields } = useAppSelector(state => state.signUpReducer);

  const dispath = useAppDispatch();

  const clickContinue = () => {
    dispath(checkInputValue(fields.email.id));
    const passwrodChecked = checkPassword(fields.password.value);
    dispath(checkInputValue(fields.password.id, passwrodChecked, passwrodChecked !== ''));
  };

  return (
    <CModal open={open} onClose={onClose}>
      <Stack spacing={2}>
        <Stack spacing={4}>
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
          <LabelInput
            id={fields.password.id}
            value={fields.password.value}
            label={fields.password.label}
            error={fields.password.error?.status}
            hint={fields.password.error?.message}
            type="password"
          />
          <Button onClick={clickContinue} type="submit">
            Continue
          </Button>
        </Stack>
      </Stack>
    </CModal>
  );
};

export default ModalRegister;
