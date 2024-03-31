import gql from 'graphql-tag';

export const ADD_COMMENT = gql`
  mutation ($data: AddCommentInput!) {
    addComment(data: $data) {
      id
      text
      postId
      userId
      likesAmount
      createDate
    }
  }
`;
