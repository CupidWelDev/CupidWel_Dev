import {
  FC,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import {
  GetAllScholarshipsQuery,
  useGetAllScholarshipsQuery,
} from "@src/generated/graphql";
import graphqlRequestClient from "@src/lib/client/graphqlReuestClient";

const GqlRequestQuery: FC = () => {
  const { isLoading, error, data } = useGetAllScholarshipsQuery<
    GetAllScholarshipsQuery,
    Error
  >(graphqlRequestClient, {});

  if (isLoading) return <p>Loading…</p>;
  if (error) return <p> error…</p>;

  return (
    <div>
      <p className="text-2xl">react-query + grqphql test</p>
      {data?.getAllScholarships?.map((scholarship) => (
        <div key={scholarship?.id}>
          <p>{scholarship?.product}</p>
        </div>
      ))}
    </div>
  );
};

export default GqlRequestQuery;
