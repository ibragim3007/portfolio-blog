import { gql } from '@apollo/client';

export const GET_POST_BY_ID = gql`
  query ($data: GetByIdInput!) {
    getPostById(data: $data) {
      id
      title
      article
      author {
        id
        firstName
        lastName
      }
      createDate
      likesAmount
      comments {
        id
      }
      likedBy {
        userId
      }
    }
  }
`;
