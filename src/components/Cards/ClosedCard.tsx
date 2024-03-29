import React from 'react';
import { Card } from '../../shared/ui/layout/Card';
import { IconButton } from '@mui/joy';
import CloseIcon from '@mui/icons-material/Close';

interface ClosedCardProps {
  children: React.ReactNode;
  closeFunction?: () => void;
  isVisible?: boolean;
}

const ClosedCard: React.FC<ClosedCardProps> = ({ children, closeFunction, isVisible }) => {
  return (
    <>
      {isVisible ? (
        <Card
          style={{
            marginTop: 30,
            marginBottom: 15,
            padding: '20px 50px',
            border: '1px dashed #777',
            position: 'relative',
          }}
        >
          <IconButton
            onClick={closeFunction}
            style={{ position: 'absolute', right: 10, top: 10 }}
            aria-label="Open in new tab"
          >
            <CloseIcon />
          </IconButton>
          {children}
        </Card>
      ) : null}
    </>
  );
};

export default ClosedCard;
