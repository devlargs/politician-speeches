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

export const GET_SPEECH_BY_ID = gql`
  query speech($id: String!) {
    speech(_id: $id) {
      _id
      date
      title
      content
      politicians {
        imageUrl
        firstName
        lastName
      }
    }
  }
`;
