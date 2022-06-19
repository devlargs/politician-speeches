import { gql } from '@apollo/client';

export const CREATE_POLITICIANS = gql`
  mutation createPolitician($input: CreatePoliticianInput!) {
    createPolitician(input: $input) {
      _id
      firstName
      lastName
      imageUrl
    }
  }
`;
