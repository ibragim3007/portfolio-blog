import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../shared/hooks/redux/reduxHooks';
import OtherUserInfo from './OtherInfo/OtherUserInfo';

const UserControll = () => {
  const { me } = useAppSelector((state) => state.meReducer);
  const { userId } = useParams();
  const isMe = me?.id === userId;

  if (!isMe) return <OtherUserInfo />;

  return <OtherUserInfo />;
};

export default UserControll;
