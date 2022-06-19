export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreatePoliticianInput = {
  firstName: Scalars['String'];
  imageUrl: Scalars['String'];
  lastName: Scalars['String'];
};

export type CreateSpeechInput = {
  content: Scalars['String'];
  date: Scalars['Int'];
  politicians: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type ListPoliticianInput = {
  _id?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  imageUrl: Scalars['String'];
  lastName: Scalars['String'];
};

export type ListSpeechInput = {
  _id?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Int']>;
  politicians: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPolitician: Politician;
  createSpeech: Speech;
  deletePolitician: Scalars['Boolean'];
  updatePolitician: Politician;
  updateSpeech: Speech;
};

export type MutationCreatePoliticianArgs = {
  input: CreatePoliticianInput;
};

export type MutationCreateSpeechArgs = {
  input: CreateSpeechInput;
};

export type MutationDeletePoliticianArgs = {
  id: Scalars['String'];
};

export type MutationUpdatePoliticianArgs = {
  id: Scalars['String'];
  input: UpdatePoliticianInput;
};

export type MutationUpdateSpeechArgs = {
  _id: Scalars['String'];
  input: UpdateSpeechInput;
};

export type Politician = {
  __typename?: 'Politician';
  _id: Scalars['String'];
  firstName: Scalars['String'];
  imageUrl: Scalars['String'];
  lastName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  politician: Politician;
  politicians: Array<Politician>;
  speech: Speech;
  speeches: Array<Speech>;
};

export type QueryPoliticianArgs = {
  _id: Scalars['String'];
};

export type QueryPoliticiansArgs = {
  filters?: InputMaybe<ListPoliticianInput>;
};

export type QuerySpeechArgs = {
  _id: Scalars['String'];
};

export type QuerySpeechesArgs = {
  filters?: InputMaybe<ListSpeechInput>;
};

export type Speech = {
  __typename?: 'Speech';
  _id: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['Int'];
  politicians: Array<Politician>;
  title: Scalars['String'];
};

export type UpdatePoliticianInput = {
  firstName?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type UpdateSpeechInput = {
  _id?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Int']>;
  politicians: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};
