import { gql } from '@apollo/client';

export const GET_PREVIEW_POSTS = gql`
  query {
    getAllPosts {
      id
      title
      author {
        id
        firstName
        lastName
      }
      createDate
      likedBy {
        userId
      }
    }
  }
`;
