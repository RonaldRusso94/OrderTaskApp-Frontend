import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
        email
        role {
          id
          name
        }
      }
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation($name: String!, $username: String, $email: String!, $password: String!, $provider: String) {
    registerUser(
      name: $name,
      email: $email
      password: $password
      provider: $provider
      username: $username
    ) {
      jwt
      user {
        id
        name
        email
        username
          role {
          id
          name
        }
      }
    }
  }
`;
