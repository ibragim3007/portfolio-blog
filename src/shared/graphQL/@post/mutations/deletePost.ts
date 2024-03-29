import gql from 'graphql-tag';

export const DELETE_POST = gql`
  mutation ($data: DeletePostInput!) {
    deletePost(data: $data) {
      id
      article
      title
    }
  }
`;
