import { gql } from '@apollo/client';

export const CREATE_SPEECH = gql`
  mutation createSpeech($input: CreateSpeechInput!) {
    createSpeech(input: $input) {
      _id
    }
  }
`;

export const DELETE_SPEECH = gql`
  mutation deleteSpeech($id: String!) {
    deleteSpeech(id: $id)
  }
`;
