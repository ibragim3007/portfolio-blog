import gql from 'graphql-tag';

export const ADD_POST = gql`
  mutation ($data: AddPostInput!) {
    addPost(data: $data) {
      id
      title
      article
      createDate
      author {
        id
        firstName
        lastName
        email
        role
        createDate
      }
    }
  }
`;
