import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
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

export type Query = {
  __typename?: 'Query';
  getAllScholarships?: Maybe<Array<Maybe<Scholarship>>>;
  getScholarshipDetail?: Maybe<Scholarship>;
  searchScholarships?: Maybe<Array<Maybe<Scholarship>>>;
};


export type QueryGetScholarshipDetailArgs = {
  scholarshipId: Scalars['String'];
};


export type QuerySearchScholarshipsArgs = {
  searchWord: Scalars['String'];
};

export type Scholarship = {
  __typename?: 'Scholarship';
  createdDt?: Maybe<Scalars['String']>;
  documentationDetail?: Maybe<Scalars['String']>;
  durationDetail?: Maybe<Scalars['String']>;
  gradeSort?: Maybe<Scalars['String']>;
  gradeStand_detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  incomeStand_detail?: Maybe<Scalars['String']>;
  institution?: Maybe<Scalars['String']>;
  institutionSort?: Maybe<Scalars['String']>;
  likeNum?: Maybe<Scalars['String']>;
  localResidenceDetail?: Maybe<Scalars['String']>;
  majorSort?: Maybe<Scalars['String']>;
  modifiedDt?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  productSort?: Maybe<Scalars['String']>;
  qualificationDetail?: Maybe<Scalars['String']>;
  qualificationRestrictionDetail?: Maybe<Scalars['String']>;
  recommendationDetail?: Maybe<Scalars['String']>;
  schoolexpenseSort?: Maybe<Scalars['String']>;
  scrapNum?: Maybe<Scalars['String']>;
  selectionNumDetail?: Maybe<Scalars['String']>;
  selectionWayDetail?: Maybe<Scalars['String']>;
  supportDetail?: Maybe<Scalars['String']>;
  univSort?: Maybe<Scalars['String']>;
};

export type GetAllScholarshipsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllScholarshipsQuery = { __typename?: 'Query', getAllScholarships?: Array<{ __typename?: 'Scholarship', id?: string | null, institution?: string | null, product?: string | null, createdDt?: string | null } | null> | null };

export type GetScholarshipDetailQueryVariables = Exact<{
  scholarshipId: Scalars['String'];
}>;


export type GetScholarshipDetailQuery = { __typename?: 'Query', getScholarshipDetail?: { __typename?: 'Scholarship', id?: string | null, institution?: string | null, product?: string | null, supportDetail?: string | null, qualificationDetail?: string | null, selectionWayDetail?: string | null, selectionNumDetail?: string | null, univSort?: string | null, gradeSort?: string | null, majorSort?: string | null } | null };


export const GetAllScholarshipsDocument = `
    query GetAllScholarships {
  getAllScholarships {
    id
    institution
    product
    createdDt
  }
}
    `;
export const useGetAllScholarshipsQuery = <
      TData = GetAllScholarshipsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllScholarshipsQueryVariables,
      options?: UseQueryOptions<GetAllScholarshipsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllScholarshipsQuery, TError, TData>(
      variables === undefined ? ['GetAllScholarships'] : ['GetAllScholarships', variables],
      fetcher<GetAllScholarshipsQuery, GetAllScholarshipsQueryVariables>(client, GetAllScholarshipsDocument, variables, headers),
      options
    );
export const GetScholarshipDetailDocument = `
    query GetScholarshipDetail($scholarshipId: String!) {
  getScholarshipDetail(scholarshipId: $scholarshipId) {
    id
    institution
    product
    supportDetail
    qualificationDetail
    selectionWayDetail
    selectionNumDetail
    univSort
    gradeSort
    majorSort
  }
}
    `;
export const useGetScholarshipDetailQuery = <
      TData = GetScholarshipDetailQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetScholarshipDetailQueryVariables,
      options?: UseQueryOptions<GetScholarshipDetailQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetScholarshipDetailQuery, TError, TData>(
      ['GetScholarshipDetail', variables],
      fetcher<GetScholarshipDetailQuery, GetScholarshipDetailQueryVariables>(client, GetScholarshipDetailDocument, variables, headers),
      options
    );