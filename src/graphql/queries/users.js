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
