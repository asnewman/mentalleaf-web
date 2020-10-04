const { gql } = require('@apollo/client');

const mutationRegister = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(input: {email: $email, password: $password}){
      ... on User {
        email
      }
      ... on InvalidInput{
        reason
      }
      ... on AddForbidden{
        reason
      }
    }
  } 
`;

export default mutationRegister;
