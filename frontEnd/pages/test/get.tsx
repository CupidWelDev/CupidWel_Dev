import { FC } from "react";
import {
  GetAllMoviesQuery,
  useGetAllMoviesQuery,
} from "@src/generated/graphql";
import graphqlRequestClient from "@src/lib/client/graphqlReuestClient";

const GqlRequestQuery: FC = () => {
  const { isLoading, error, data } = useGetAllMoviesQuery<
    GetAllMoviesQuery,
    Error
  >(graphqlRequestClient, {});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p> error...</p>;
  return (
    <div>
      <p className="text-2xl">react-query + grqphql test</p>
      {data?.allMovies?.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default GqlRequestQuery;
