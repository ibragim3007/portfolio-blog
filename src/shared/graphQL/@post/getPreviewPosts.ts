import { gql } from '@apollo/client';

export const GET_PREVIEW_POSTS = gql`
  query {
    getAllPosts {
      id
      title
      article
      createDate
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
