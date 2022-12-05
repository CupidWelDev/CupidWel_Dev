import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Alert = {
  __typename?: 'Alert';
  email?: Maybe<Scalars['String']>;
  isChecked?: Maybe<Scalars['Boolean']>;
  isSent?: Maybe<Scalars['Boolean']>;
  noticeId?: Maybe<Scalars['Int']>;
  scholarshipId?: Maybe<Scalars['String']>;
  sentTime?: Maybe<Scalars['String']>;
};

export type AlertInput = {
  email: Scalars['String'];
  noticeId?: InputMaybe<Scalars['Int']>;
  scholarshipId?: InputMaybe<Scalars['String']>;
};

export type CupidToken = {
  __typename?: 'CupidToken';
  accessToken?: Maybe<Scalars['String']>;
  grantType?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type FilterInput = {
  address?: InputMaybe<Scalars['String']>;
  attendance?: InputMaybe<Scalars['String']>;
  department?: InputMaybe<Scalars['String']>;
  duplicateBenefit?: InputMaybe<Scalars['Boolean']>;
  grade?: InputMaybe<Scalars['String']>;
  incomeBracket?: InputMaybe<Scalars['String']>;
  major?: InputMaybe<Scalars['String']>;
  scholarshipTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  school?: InputMaybe<Scalars['String']>;
  specialClass?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAlert?: Maybe<Result>;
  addScrap?: Maybe<Result>;
  checkAlert?: Maybe<Result>;
  deleteAlert?: Maybe<Result>;
  deleteScrap?: Maybe<Result>;
  updateUser?: Maybe<Result>;
};


export type MutationAddAlertArgs = {
  alertInput?: InputMaybe<AlertInput>;
};


export type MutationAddScrapArgs = {
  scholarshipId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCheckAlertArgs = {
  alertInput?: InputMaybe<AlertInput>;
};


export type MutationDeleteAlertArgs = {
  alertInput?: InputMaybe<AlertInput>;
};


export type MutationDeleteScrapArgs = {
  scholarshipId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  userInput?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  getAlertList?: Maybe<Array<Maybe<Alert>>>;
  getAllScholarships?: Maybe<Array<Maybe<Scholarship>>>;
  getScholarshipDetail?: Maybe<Scholarship>;
  getScrapList?: Maybe<Array<Maybe<Scalars['String']>>>;
  getUserDetail?: Maybe<User>;
  scholarshipFilter?: Maybe<Array<Maybe<Scholarship>>>;
  searchScholarships?: Maybe<Array<Maybe<Scholarship>>>;
  signInUp?: Maybe<CupidToken>;
};


export type QueryGetAlertListArgs = {
  userId: Scalars['String'];
};


export type QueryGetScholarshipDetailArgs = {
  scholarshipId: Scalars['String'];
};


export type QueryGetScrapListArgs = {
  userId: Scalars['String'];
};


export type QueryGetUserDetailArgs = {
  userId: Scalars['String'];
};


export type QueryScholarshipFilterArgs = {
  filterInput?: InputMaybe<FilterInput>;
};


export type QuerySearchScholarshipsArgs = {
  searchWord: Scalars['String'];
};


export type QuerySignInUpArgs = {
  kakaoAccessToken: Scalars['String'];
};

export type Result = {
  __typename?: 'Result';
  errorMsg?: Maybe<Scalars['String']>;
  resultCode?: Maybe<Scalars['Int']>;
  resultMsg?: Maybe<Scalars['String']>;
};

/**
 *  type Test2{
 *      tmp2: Int
 *  }
 *  type Test3{
 *      tmp3: Boolean
 *  }
 */
export type Scholarship = {
  __typename?: 'Scholarship';
  createdDt?: Maybe<Scalars['String']>;
  documentationDetail?: Maybe<Scalars['String']>;
  duplicateBenefit?: Maybe<Scalars['String']>;
  durationDetail?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  gradeSort?: Maybe<Scalars['String']>;
  gradeStandDetail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  incomeBracket?: Maybe<Scalars['String']>;
  incomeStandDetail?: Maybe<Scalars['String']>;
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
  scholarshipType?: Maybe<Scalars['String']>;
  schoolexpenseSort?: Maybe<Scalars['String']>;
  scrapNum?: Maybe<Scalars['String']>;
  selectionNumDetail?: Maybe<Scalars['String']>;
  selectionWayDetail?: Maybe<Scalars['String']>;
  supportDetail?: Maybe<Scalars['String']>;
  univSort?: Maybe<Scalars['String']>;
};

/**  union targetValue = Test1 | Test2 | Test3 */
export type Test1 = {
  targetName?: InputMaybe<Scalars['String']>;
  targetValue?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  attendance?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  famCum?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['String']>;
  isLeaveAbsence?: Maybe<Scalars['Boolean']>;
  isMarried?: Maybe<Scalars['Boolean']>;
  major?: Maybe<Scalars['String']>;
  monthIncome?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  paraentAddress?: Maybe<Scalars['String']>;
  parentJob?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  prevGrade?: Maybe<Scalars['String']>;
  remainedSemester?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
  schoolBelong?: Maybe<Scalars['String']>;
  stratum?: Maybe<Scalars['String']>;
};

export type UserInput = {
  address?: InputMaybe<Scalars['String']>;
  age: Scalars['Int'];
  attendance?: InputMaybe<Scalars['String']>;
  birthDate: Scalars['String'];
  email: Scalars['String'];
  famCum?: InputMaybe<Scalars['Int']>;
  gender: Scalars['String'];
  income?: InputMaybe<Scalars['String']>;
  isLeaveAbsence?: InputMaybe<Scalars['Boolean']>;
  isMarried?: InputMaybe<Scalars['Boolean']>;
  major?: InputMaybe<Scalars['String']>;
  monthIncome?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  parentAddress?: InputMaybe<Scalars['String']>;
  parentJob?: InputMaybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  prevGrade?: InputMaybe<Scalars['String']>;
  remainedSemester?: InputMaybe<Scalars['Int']>;
  school?: InputMaybe<Scalars['String']>;
  schoolBelong?: InputMaybe<Scalars['String']>;
  stratum?: InputMaybe<Scalars['String']>;
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