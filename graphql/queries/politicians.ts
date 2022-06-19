import { gql } from '@apollo/client';

export const GET_POLITICIANS = gql`
  {
    politicians {
      _id
      firstName
      lastName
      imageUrl
    }
  }
`;
