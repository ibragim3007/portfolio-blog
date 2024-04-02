import gql from 'graphql-tag';

export const RATE_COMMENT = gql`
  mutation ($data: RateCommentInput!) {
    rateComment(data: $data) {
      id
      postId
    }
  }
`;
