import gql from 'graphql-tag';

export const EDIT_POST = gql`
  mutation ($data: EditPostInput!) {
    editPost(data: $data) {
      id
      title
      article
    }
  }
`;
