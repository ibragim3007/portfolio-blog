import React from 'react';
import LayoutWindow from '../../../router/controller/LayoutWindow';
import UserControll from '../../../modules/User';
import AppWidth from '../../../shared/layout/AppWidth';

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
