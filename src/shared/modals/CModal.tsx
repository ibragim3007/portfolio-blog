import { Modal, ModalDialog } from '@mui/joy';
import React from 'react';
import { Card } from '../layout/Card';

interface CModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const CModal: React.FC<CModalProps> = ({ children, onClose, open }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog style={{ backgroundColor: 'transparent', padding: 0, border: 0 }}>
        <Card padding={'20px 40px'}>{children}</Card>
      </ModalDialog>
    </Modal>
  );
};

export default CModal;
