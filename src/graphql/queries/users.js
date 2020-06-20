import gql from 'graphql-tag';

export const ME_QUERY = gql`
  {
    self {
      id
      username
      email
    }
  }
`;

export const GET_USER_DETAILS = gql`
  {
    self {
      id
      orders {
        id
      }
    }
  }
`;
