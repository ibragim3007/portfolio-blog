import React from 'react';
import LayoutWindow from '../../../app/router/controller/LayoutWindow';
import UserControll from '../../../modules/User';
import AppWidth from '../../../shared/ui/layout/AppWidth';

const UserPage = () => {
  return (
    <AppWidth>
      <LayoutWindow>
        <UserControll />
      </LayoutWindow>
    </AppWidth>
  );
};

export default UserPage;
