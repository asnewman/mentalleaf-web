const { gql } = require('@apollo/client');

const mutationLogin = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(input: {email: $email, password: $password}){
        ... on Tokens {
        accessToken
        refreshToken
      }
      ... on InvalidInput {
        reason
      }
    }
  }
`;

export default mutationLogin;
