import { gql } from '@apollo/client';

export const ME = gql`
  query {
    me {
      id
      firstName
      lastName
      role
      createDate
      lastOnline
    }
  }
`;
