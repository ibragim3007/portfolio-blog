import { gql } from '@apollo/client';

export const SignUp = gql`
  mutation ($data: AddUserInput!) {
    addUser(data: $data) {
      token
    }
  }
`;
