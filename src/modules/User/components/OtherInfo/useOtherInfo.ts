import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_USER_BY_ID } from '../../../../shared/graphQL/@client/getUserById';
import { OtherUserInterface } from '../../../../shared/graphQL/@client/interface/otherUserInterface';

export const useOtherInfo = (userId?: string) => {
  const [getOtherUserInfo, { data, loading, error }] = useLazyQuery<
    { getUserById: OtherUserInterface },
    { id: string }
  >(GET_USER_BY_ID);

  useEffect(() => {
    if (userId)
      void getOtherUserInfo({
        variables: {
          id: userId,
        },
      });
  }, [getOtherUserInfo, userId]);

  useEffect(() => {
    if (error?.message) alert(error.message);
  }, [error]);

  return {
    data: data?.getUserById,
    loading,
    error,
  };
};
