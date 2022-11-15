import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit["headers"]
) {
  return async (): Promise<TData> =>
    // @ts-ignore
    client.request<TData, TVariables>(query, variables, headers);
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
  __typename?: "Query";
  getAllScholarships?: Maybe<Array<Maybe<Scholarship>>>;
};

export type Scholarship = {
  __typename?: "Scholarship";
  createdDt?: Maybe<Scalars["String"]>;
  documentationDetail?: Maybe<Scalars["String"]>;
  durationDetail?: Maybe<Scalars["String"]>;
  gradeSort?: Maybe<Scalars["String"]>;
  gradeStand_detail?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  incomeStand_detail?: Maybe<Scalars["String"]>;
  institution?: Maybe<Scalars["String"]>;
  institutionSort?: Maybe<Scalars["String"]>;
  likeNum?: Maybe<Scalars["String"]>;
  localResidenceDetail?: Maybe<Scalars["String"]>;
  majorSort?: Maybe<Scalars["String"]>;
  modifiedDt?: Maybe<Scalars["String"]>;
  product?: Maybe<Scalars["String"]>;
  productSort?: Maybe<Scalars["String"]>;
  qualificationDetail?: Maybe<Scalars["String"]>;
  qualificationRestrictionDetail?: Maybe<Scalars["String"]>;
  recommendationDetail?: Maybe<Scalars["String"]>;
  schoolexpenseSort?: Maybe<Scalars["String"]>;
  scrapNum?: Maybe<Scalars["String"]>;
  selectionNumDetail?: Maybe<Scalars["String"]>;
  selectionWayDetail?: Maybe<Scalars["String"]>;
  supportDetail?: Maybe<Scalars["String"]>;
  univSort?: Maybe<Scalars["String"]>;
};

export type GetAllScholarshipsQueryQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetAllScholarshipsQueryQuery = {
  __typename?: "Query";
  getAllScholarships?: Array<{
    __typename?: "Scholarship";
    id?: string | null;
    institution?: string | null;
    product?: string | null;
    institutionSort?: string | null;
    productSort?: string | null;
    schoolexpenseSort?: string | null;
    univSort?: string | null;
    gradeSort?: string | null;
    majorSort?: string | null;
    gradeStand_detail?: string | null;
    incomeStand_detail?: string | null;
    supportDetail?: string | null;
    qualificationDetail?: string | null;
    localResidenceDetail?: string | null;
    durationDetail?: string | null;
    selectionWayDetail?: string | null;
    selectionNumDetail?: string | null;
    qualificationRestrictionDetail?: string | null;
    recommendationDetail?: string | null;
    documentationDetail?: string | null;
    createdDt?: string | null;
    modifiedDt?: string | null;
    likeNum?: string | null;
    scrapNum?: string | null;
  } | null> | null;
};

export const GetAllScholarshipsQueryDocument = `
    query GetAllScholarshipsQuery {
  getAllScholarships {
    id
    institution
    product
    institutionSort
    productSort
    schoolexpenseSort
    univSort
    gradeSort
    majorSort
    gradeStand_detail
    incomeStand_detail
    supportDetail
    qualificationDetail
    localResidenceDetail
    durationDetail
    selectionWayDetail
    selectionNumDetail
    qualificationRestrictionDetail
    recommendationDetail
    documentationDetail
    createdDt
    modifiedDt
    likeNum
    scrapNum
  }
}
    `;
export const useGetAllScholarshipsQueryQuery = <
  TData = GetAllScholarshipsQueryQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables?: GetAllScholarshipsQueryQueryVariables,
  options?: UseQueryOptions<GetAllScholarshipsQueryQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetAllScholarshipsQueryQuery, TError, TData>(
    variables === undefined
      ? ["GetAllScholarshipsQuery"]
      : ["GetAllScholarshipsQuery", variables],
    fetcher<
      GetAllScholarshipsQueryQuery,
      GetAllScholarshipsQueryQueryVariables
    >(client, GetAllScholarshipsQueryDocument, variables, headers),
    options
  );
