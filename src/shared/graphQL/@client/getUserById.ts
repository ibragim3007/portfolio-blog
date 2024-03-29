import { gql } from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query ($id: String!) {
    getUserById(id: $id) {
      id
      firstName
      lastName
      lastOnline
      writtenPosts {
        id
        title
        article
        createDate
        author {
          id
          firstName
          lastName
        }
        likesAmount
        likedBy {
          userId
        }
      }
    }
  }
`;
