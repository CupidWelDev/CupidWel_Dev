import { GraphQLClient } from "graphql-request";

const requestHeaders = {
  authorization: "CupidWel_TOKEN", // 인증 토근
};

const graphqlRequestClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
  {
    headers: requestHeaders,
  }
);

export default graphqlRequestClient;
