import { gql } from '@apollo/client';

export const RATE_POST = gql`
  mutation ($data: RatePostInput!) {
    ratePost(data: $data) {
      id
      likesAmount
    }
  }
`;
