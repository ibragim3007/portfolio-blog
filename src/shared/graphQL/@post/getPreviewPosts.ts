import { gql } from '@apollo/client';

export const GET_PREVIEW_POSTS = gql`
  query {
    getAllPosts {
      id
      title
      likesAmount
      commentsAmount
      author {
        id
        firstName
        lastName
      }
      createDate
    }
  }
`;
