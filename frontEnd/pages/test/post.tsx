// import { FC } from "react";
// import {
//   GetAllTweetsQuery,
//   PostTweetMutation,
//   PostTweetMutationVariables,
//   useGetAllTweetsQuery,
//   usePostTweetMutation,
// } from "@src/generated/graphql";
// import graphqlRequestClient from "@src/lib/client/graphqlReuestClient";
// import { useQueryClient } from "@tanstack/react-query";

// const GraphqlMutation: FC = () => {
//   //  리로딩 시키기 위해 queryClient를 인스턴스화 해서 가져옴
//   const queryClient = useQueryClient();

//   const { mutate } = usePostTweetMutation<Error>(graphqlRequestClient, {
//     onSuccess: (
//       data: PostTweetMutation,
//       variables: PostTweetMutationVariables,
//       context: unknown
//     ) => {
//       //  리패칭할 스키마 key값 넣어줌
//       queryClient.invalidateQueries("GetAllUsers");
//       return console.log("mutation data", data);
//     },
//   });
//   return (
//     <>
//       <p className="text-2xl text-center">POST GRAPHQL</p>
//       <button
//         type="button"
//         onClick={() => mutate({ text: "post test", userId: "2" })}
//         className="border-black border-2 w-full rounded-2xl "
//       >
//         add tweet
//       </button>
//       <AllTweets />
//     </>
//   );
// };

// export default GraphqlMutation;

// const AllTweets: FC = () => {
//   const { isLoading, error, data } = useGetAllTweetsQuery<
//     GetAllTweetsQuery,
//     Error
//   >(graphqlRequestClient);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p> error...</p>;

//   // @ts-ignore
//   return (
//     <>
//       <p className="text-xl text-center">All tweet</p>
//       {data?.allTweets?.map((tweet) => (
//         <div key={tweet?.id} className="flex">
//           <p className="w-1/2 text-center">{tweet?.id}</p>
//           <p className="w-1/2 text-center">{tweet?.text}</p>
//         </div>
//       ))}
//     </>
//   );
// };
