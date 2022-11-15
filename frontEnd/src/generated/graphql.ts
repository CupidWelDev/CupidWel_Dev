import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Movie = {
  __typename?: 'Movie';
  background_image: Scalars['String'];
  background_image_original: Scalars['String'];
  date_uploaded: Scalars['String'];
  date_uploaded_unix: Scalars['Int'];
  description_full: Scalars['String'];
  genres: Array<Scalars['String']>;
  id: Scalars['Int'];
  imdb_code: Scalars['String'];
  language: Scalars['String'];
  large_cover_image: Scalars['String'];
  medium_cover_image: Scalars['String'];
  mpa_rating: Scalars['String'];
  rating: Scalars['Float'];
  runtime: Scalars['Float'];
  slug: Scalars['String'];
  small_cover_image: Scalars['String'];
  state: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  synopsis: Scalars['String'];
  title: Scalars['String'];
  title_english: Scalars['String'];
  title_long: Scalars['String'];
  torrents: Array<Torrents>;
  url: Scalars['String'];
  year: Scalars['Int'];
  yt_trailer_code: Scalars['String'];
};

/** TEST */
export type Mutation = {
  __typename?: 'Mutation';
  deleteTweet: Scalars['Boolean'];
  postTweet?: Maybe<Tweet>;
};


/** TEST */
export type MutationDeleteTweetArgs = {
  id: Scalars['ID'];
};


/** TEST */
export type MutationPostTweetArgs = {
  text: Scalars['String'];
  userId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  allMovies: Array<Movie>;
  allTweets?: Maybe<Array<Maybe<Tweet>>>;
  allUsers: Array<User>;
  movie?: Maybe<Movie>;
  ping?: Maybe<Scalars['String']>;
  tweet?: Maybe<Tweet>;
};


export type QueryMovieArgs = {
  id: Scalars['ID'];
};


export type QueryTweetArgs = {
  id: Scalars['ID'];
};

export type Torrents = {
  __typename?: 'Torrents';
  date_uploaded: Scalars['String'];
  date_uploaded_unix: Scalars['Int'];
  hash: Scalars['String'];
  peers: Scalars['Int'];
  quality: Scalars['String'];
  seeds: Scalars['Int'];
  size: Scalars['String'];
  size_bytes: Scalars['Int'];
  type: Scalars['String'];
  url: Scalars['String'];
};

/** Tweet Schema 구조 */
export type Tweet = {
  __typename?: 'Tweet';
  author?: Maybe<User>;
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  firstName: Scalars['String'];
  /** fullName = FirstName + LastName */
  fullName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type GetAllMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMoviesQuery = { __typename?: 'Query', allMovies: Array<{ __typename?: 'Movie', id: number, title: string, medium_cover_image: string }> };

export type GetAllTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTweetsQuery = { __typename?: 'Query', allTweets?: Array<{ __typename?: 'Tweet', id: string, text: string } | null> | null };

export type PostTweetMutationVariables = Exact<{
  text: Scalars['String'];
  userId: Scalars['ID'];
}>;


export type PostTweetMutation = { __typename?: 'Mutation', postTweet?: { __typename?: 'Tweet', id: string, text: string } | null };


export const GetAllMoviesDocument = `
    query GetAllMovies {
  allMovies {
    id
    title
    medium_cover_image
  }
}
    `;
export const useGetAllMoviesQuery = <
      TData = GetAllMoviesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllMoviesQueryVariables,
      options?: UseQueryOptions<GetAllMoviesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllMoviesQuery, TError, TData>(
      variables === undefined ? ['GetAllMovies'] : ['GetAllMovies', variables],
      fetcher<GetAllMoviesQuery, GetAllMoviesQueryVariables>(client, GetAllMoviesDocument, variables, headers),
      options
    );
export const GetAllTweetsDocument = `
    query GetAllTweets {
  allTweets {
    id
    text
  }
}
    `;
export const useGetAllTweetsQuery = <
      TData = GetAllTweetsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllTweetsQueryVariables,
      options?: UseQueryOptions<GetAllTweetsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllTweetsQuery, TError, TData>(
      variables === undefined ? ['GetAllTweets'] : ['GetAllTweets', variables],
      fetcher<GetAllTweetsQuery, GetAllTweetsQueryVariables>(client, GetAllTweetsDocument, variables, headers),
      options
    );
export const PostTweetDocument = `
    mutation PostTweet($text: String!, $userId: ID!) {
  postTweet(text: $text, userId: $userId) {
    id
    text
  }
}
    `;
export const usePostTweetMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<PostTweetMutation, TError, PostTweetMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<PostTweetMutation, TError, PostTweetMutationVariables, TContext>(
      ['PostTweet'],
      (variables?: PostTweetMutationVariables) => fetcher<PostTweetMutation, PostTweetMutationVariables>(client, PostTweetDocument, variables, headers)(),
      options
    );