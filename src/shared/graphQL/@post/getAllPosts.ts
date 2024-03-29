import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query {
    getAllPosts {
      id
      title
      article
      likesAmount
      commentsAmount
      author {
        firstName
        lastName
      }
      createDate
    }
  }
`;
