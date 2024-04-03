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
        likedBy {
          userId
        }
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

export const GET_POST_BY_ID_MAIN = gql`
  query ($data: GetByIdInput!) {
    getPostById(data: $data) {
      id
      title
      article
    }
  }
`;
