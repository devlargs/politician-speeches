import { gql } from '@apollo/client';

export const GET_SPEECHES = gql`
  {
    speeches {
      content
      title
      date
      _id
      politicians {
        imageUrl
        lastName
        firstName
      }
    }
  }
`;
