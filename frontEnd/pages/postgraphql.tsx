import { FC } from "react";
import {
  GetAllTweetsQuery,
  GetAllUsersQuery,
  PostTweetMutation,
  PostTweetMutationVariables,
  useGetAllTweetsQuery,
  useGetAllUsersQuery,
  usePostTweetMutation,
} from "@src/generated/graphql";
import graphqlRequestClient from "@src/lib/client/graphqlReuestClient";
import { useQueryClient } from "@tanstack/react-query";

const GraphqlMutaion: FC = () => {
  //  리로딩 시키기 위해 queryClient를 인스턴스화 해서 가져옴
  const queryClient = useQueryClient();

  const { mutate } = usePostTweetMutation<Error>(graphqlRequestClient, {
    onSuccess: (
      data: PostTweetMutation,
      variables: PostTweetMutationVariables,
      context: unknown
    ) => {
      //  리패칭할 스키마 key값 넣어줌
      queryClient.invalidateQueries("GetAllUsers");
      return console.log("mutation data", data);
    },
  });
  return (
    <>
      <p className="text-2xl text-center">POST GRAPHQL</p>
      <button
        type="button"
        onClick={() => mutate({ text: "post test", userId: "2" })}
        className="border-black border-2 w-full rounded-2xl "
      >
        add tweet
      </button>

      <AllTweets />

      <AllUsers />
    </>
  );
};

export default GraphqlMutaion;

const AllTweets: FC = () => {
  const { isLoading, error, data } = useGetAllTweetsQuery<
    GetAllTweetsQuery,
    Error
  >(graphqlRequestClient);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p> error...</p>;

  return (
    <>
      <p className="text-xl text-center">All tweet</p>
      {data?.allTweets?.map((tweet) => (
        <div key={tweet.id} className="flex">
          <p className="w-1/2 text-center">{tweet.id}</p>
          <p className="w-1/2 text-center">{tweet.text}</p>
        </div>
      ))}
    </>
  );
};

const AllUsers: FC = () => {
  //  user 가져오기
  const { isLoading, error, data } = useGetAllUsersQuery<
    GetAllUsersQuery,
    Error
  >(graphqlRequestClient, {});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p> error...</p>;

  return (
    <div>
      <p className="text-2xl">POST GRAPHQL</p>
      <div>
        <p className="text-xl"> User</p>
        {data?.allUsers?.map((user) => (
          <div key={user.id}>{user.fullName}</div>
        ))}
      </div>
    </div>
  );
};
