import { gql } from '@apollo/client';

export const GET_POST_BY_ID = gql`
  query ($data: GetByIdInput!) {
    getPostById(data: $data) {
      id
      title
      article
      likesAmount
      createDate
      likedBy {
        userId
      }
      comments {
        id
        text
        likesAmount
        createDate
        user {
          id
          firstName
          lastName
        }
      }
      author {
        id
        firstName
        lastName
      }
    }
  }
`;
